import { StyleSheet } from 'react-native';
import theme from '../../theme';


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 6,
    padding: 8,
    minHeight: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flex: 0.7,
    paddingLeft: 4,
    color: theme.palette.common.white,
  }
});

export default styles;
