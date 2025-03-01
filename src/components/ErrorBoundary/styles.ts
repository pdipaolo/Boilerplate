import { StyleSheet } from 'react-native';

import theme from '../../theme';
import { typography } from '../../theme/typography';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.alpha.black[50],
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: 20,
    padding: 20,
    width: '80%',
    backgroundColor: theme.palette.common.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: typography.fontSize.xxl,
    marginBottom: 12,
  },
  description: {
    marginBottom: 18,
    textAlign: 'center',
  },
  button: {
    width: 140,
    borderRadius: 50,
    height: 40,
  }
});

export default styles;
