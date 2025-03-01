import React, { useState } from 'react';
import SafeAreaView from '../../components/SafeAreaView';
import TextInput from '../../ui/TextInput';
import { translate } from '../../translations/translate';
import Button, { ButtonType } from '../../ui/Button';
import styles from './styles';
import { Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { thunkLogin } from './services';

import { useAppDispatch } from '../../redux';
import { palette } from '../../theme/colors';
import { ICON } from '../../ui/Icon/constants';
import { useNavigation } from '../../navigators/RootStack/hooks';
import { createAccountRoute } from '../CreateAccount/route';
import auth from '@react-native-firebase/auth';

function Login() {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const [email, setMail] = useState<null | string>('');
  const [password, setPassword] = useState<null | string>('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const handleLogin = () => {
    dispatch(thunkLogin({email, password}));
  };

  const handleCreateAccount = () => {
    navigate(createAccountRoute);
  };

  const handleForgotPassword = () => {
    auth().sendPasswordResetEmail(email).then(() => {
      Alert.alert('Password reset email sent');
    }).catch((error) => {
      Alert.alert(error.message);
    });
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
            isDisabled={!isEmailValid && password.length <= 5}
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
          <Button
            style={styles.createAccount}
            type={ButtonType.outlined}
            isDisabled={!isEmailValid}
            onPress={handleForgotPassword}
          >
            {translate('screens.login.forgotPassword')}
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
