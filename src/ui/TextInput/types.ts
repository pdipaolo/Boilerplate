import { TextInputProps, ViewStyle } from 'react-native';
import { ICON } from '../Icon/constants';

enum TextInputError {
  required = 'required',
  email = 'email',
  password = 'password',
  confirmPassword = 'confirmPassword',
  minLength = 'minLength',
  maxLength = 'maxLength',
  match = 'match',
}

type PropsTypes = TextInputProps & {
  containerStyle?: ViewStyle;
  icon?: typeof ICON[keyof typeof ICON], 
  error?: TextInputError,
  handlePressIcon?: () => void, 
};

export { type PropsTypes, TextInputError };
