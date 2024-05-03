import { StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.palette.text.primary,
  },
  bold: {
    fontFamily: theme.typography.fontFamily.bold,
  },
  extraBold: {
    fontFamily: theme.typography.fontFamily.extraBold,
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  mainColor: {
    color: theme.palette.primary.main,
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export { styles };
