import { StyleSheet } from 'react-native';
import { palette } from '../../theme/colors';

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
  },
  container: {
    boxShadow: palette.boxShadow,
    borderRadius: 12,
    height: 48,
    backgroundColor: palette.grey[100],
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',

  },
  textInput: {
    width: '90%',
    height: '100%',
  },
  error: {
    paddingLeft: 16,
    color: palette.common.red,
  },
});

export { styles };
