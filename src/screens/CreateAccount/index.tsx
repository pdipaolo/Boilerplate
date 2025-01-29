import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { styles } from './styles';
import SafeAreaView from '../../components/SafeAreaView';
import { useNavigation } from '../../navigators/RootStack/hooks';
import { type UserType } from './types';
import TextInput from '../../ui/TextInput';
import { palette } from '../../theme/colors';
import { translate } from '../../translations/translate';
import Button, { ButtonType } from '../../ui/Button';
import { TextInputError } from '../../ui/TextInput/types';
import { useAppDispatch } from '../../redux';
import { thunkCreateAccount } from '../Login/services';

function CreateAccount(): JSX.Element {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<UserType>({
    email: null,
    password: null,
    confirmPassword: null,
    name: null,
    lastname: null,
    city: null,
    address: null,
  });

  const isButtonEnabled = () => {
    const isFormValid = () => {
      return Object.values(user).every(value => value !== '' && value !== null);
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isFormValid() && emailRegex.test(user.email) && user.password.length > 5 && user.password === user.confirmPassword;
  };

  const handleCreateAccount = async () => {
    dispatch(thunkCreateAccount({user: user, navigation}))
  };

  const error = (key: string) => {
    if (user[key] === '' || user[key] === null) {
      return TextInputError.required;
    };

    if (key === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        return TextInputError.email;
      }
    }
    if (key === 'confirmPassword') {
      if (user.password !== user.confirmPassword) {
        return TextInputError.match;
      }
    }
    // gestire errori per password
    return null;
  }
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {Object.keys(user).map((key) =>
            <TextInput
              containerStyle={styles.textInput}
              key={key}
              onChangeText={(text) => setUser((prev) => ({ ...prev, [key]: text }))}
              placeholder={translate('screens.createAccount.placeholder', { context: key })}
              placeholderTextColor={palette.common.black}
              error={error(key)}
            />
          )}
          <Button
            style={styles.submit}
            isDisabled={!isButtonEnabled()}
            onPress={handleCreateAccount}
          >
            {translate('screens.createAccount.submit')}
          </Button>
          <Button
            style={styles.goback}
            type={ButtonType.outlined}
            onPress={() => navigation.goBack()}
          >
            {translate('screens.createAccount.goback')}
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export default CreateAccount;
