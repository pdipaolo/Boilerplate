import React, { useEffect } from 'react';
import { View } from 'react-native';
import { PropsTypes } from './types';
import { styles } from './styles';
import { hide } from 'react-native-bootsplash';

function BootSplash({ onAnimationEnd }: PropsTypes): JSX.Element {

  useEffect(() => {
      setTimeout(() => {
        hide({ fade: true });
        onAnimationEnd();
      }, 3000);
  }, []);


  return (
    <View style={styles.container}>
    </View>
  );
}
export default BootSplash;
