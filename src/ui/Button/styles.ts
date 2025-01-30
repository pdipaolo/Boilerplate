import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = (color?: string, textColor?: string) => StyleSheet.create({
  button: {
    backgroundColor: color || theme.palette.primary.main,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    overflow: 'hidden',
  },
  textWrapper: {
    color: textColor || theme.palette.common.black,
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.m,
    textAlign: 'center',
    width: '100%'
  },
  text: {
    backgroundColor: theme.palette.common.transparent,
  },
  outlined: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  elevation: {
    shadowColor: theme.palette.common.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disabled: {
    opacity: 0.5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  ripple: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    backgroundColor: theme.palette.common.ripple,

  },
});

export { styles };
