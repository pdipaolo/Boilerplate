import React, { useEffect } from 'react';
import { View } from 'react-native';
import { PropsTypes } from './types';
import { styles } from './styles';
import { hide } from 'react-native-bootsplash';
import { useAppDispatch } from '../../redux';
import { setLoggedIn } from '../Login/slices';

function BootSplash({ onAnimationEnd }: PropsTypes): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
      setTimeout(() => {
        hide({ fade: true });
        onAnimationEnd();
      }, 3000);
  }, []);

  // use function to set retrive start login
  const setLoggeIn = () => {
    dispatch(setLoggedIn(true));
  }

  return (
    <View style={styles.container}>
    </View>
  );
}
export default BootSplash;
