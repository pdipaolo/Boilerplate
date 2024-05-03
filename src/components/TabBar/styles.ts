import { StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: theme.palette.common.white,
  },
  item: {
    flex: 1,
    gap: 1,
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.fontSize.s,
  },
  focused: {
    fontFamily: theme.typography.fontFamily.extraBold,
  },
});

export { styles };
