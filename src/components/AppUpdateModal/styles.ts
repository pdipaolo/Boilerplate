import { StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 24,
  },
  content: {
    alignItems: 'center',
    padding: 8,
    gap: 8,
  },
  header_icon: {
    marginTop: 24,
  },
  title: {
    marginTop: 16,
    fontSize: theme.typography.fontSize.xl,
    fontFamily: theme.typography.fontFamily.extraBold,
  },
  message: {
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily.regular,
    fontSize: theme.typography.fontSize.l,
    color: theme.palette.common.black,
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 16,
  },
  button: {
    paddingHorizontal: 16,
  },
  buttonText: {
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.m,
    color: theme.palette.common.black,
  },
  cancelButtonText: {
    fontFamily: theme.typography.fontFamily.bold,
    color: theme.palette.common.black,
  },
});

export { styles };
