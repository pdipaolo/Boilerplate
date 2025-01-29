import React, { useEffect, useState } from 'react';
import SafeAreaView from '../../components/SafeAreaView';
import TextInput from '../../ui/TextInput';
import { translate } from '../../translations/translate';
import Button, { ButtonType } from '../../ui/Button';
import styles from './styles';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { thunkLogin } from './services';

import { useAppDispatch, useAppSelector } from '../../redux';
import { RootState } from '../../redux/store';
import { palette } from '../../theme/colors';
import { ICON } from '../../ui/Icon/constants';
import { useNavigation } from '../../navigators/RootStack/hooks';
import { createAccountRoute } from '../CreateAccount/route';

function Login() {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const [email, setMail] = useState<null | string>('');
  const [password, setPassword] = useState<null | string>('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const isButtonEnabled = () => {
    if (!email || !password) {
      return false;
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && password.length > 5;
  };
  const user = useAppSelector(
    (state: RootState) => state.login.user,
  ); 

  useEffect(() => {
    if (user) {
      console.log('User:', user);
    }
  }, [user]);

  const handleLogin = () => {
    dispatch(thunkLogin({email, password}));
  };

  const handleCreateAccount = () => {
    navigate(createAccountRoute);
    console.log('handleCreateAccount');
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <TextInput
            containerStyle={styles.textInput}
            onChangeText={(text) => setMail(text)}
            placeholder={translate('screens.login.placeholder', { context: 'mail' })}
            placeholderTextColor={palette.common.black}
          />
          <TextInput
            containerStyle={styles.textInput}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!isPasswordVisible}
            icon={isPasswordVisible ? ICON.EYE_ON : ICON.EYE_OFF}
            handlePressIcon={() => setPasswordVisible(!isPasswordVisible)}
            placeholder={translate('screens.login.placeholder', { context: 'password' })}
            placeholderTextColor={palette.common.black}
          />
          <Button
            style={styles.submit}
            isDisabled={!isButtonEnabled()}
            onPress={handleLogin}
          >
            {translate('screens.login.submit')}
          </Button>
          <Button
            style={styles.createAccount}
            type={ButtonType.outlined}
            onPress={handleCreateAccount}
          >
            {translate('screens.login.createAccount')}
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
