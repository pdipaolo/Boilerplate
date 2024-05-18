import { StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  loading: {
    backgroundColor: theme.palette.alpha.black[50],
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  animation: {
    alignSelf: 'center',
    alignItems: 'center',
    height: '25%',
    width: '25%',
  },
});

export default styles;
