import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { styles } from './styles';
import SafeAreaView from '../../components/SafeAreaView';
import { useNavigation } from '../../navigators/RootStack/hooks';
import { type FormType } from './types';
import TextInput from '../../ui/TextInput';
import { palette } from '../../theme/colors';
import { translate } from '../../translations/translate';
import Button, { ButtonType } from '../../ui/Button';
import { TextInputError } from '../../ui/TextInput/types';

function CreateAccount(): JSX.Element {
  const navigation = useNavigation();
  const [form, setForm] = useState<FormType>({
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
      return Object.values(form).every(value => value !== '' && value !== null);
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isFormValid() && emailRegex.test(form.email) && form.password.length > 5 && form.password === form.confirmPassword;
  };

  const handleCreateAccount = () => {
    console.log('handleCreateAccount', form);
  };

  const error = (key: string) => {
    if (form[key] === '' || form[key] === null) {
      return TextInputError.required;
    };

    if (key === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        return TextInputError.email;
      }
    }
    if (key === 'confirmPassword') {
      if (form.password !== form.confirmPassword) {
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
          keyboardShouldPersistTaps="handled"
        >
          {Object.keys(form).map((key) =>
            <TextInput
              containerStyle={styles.textInput}
              key={key}
              onChangeText={(text) => setForm((prev) => ({ ...prev, [key]: text }))}
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
