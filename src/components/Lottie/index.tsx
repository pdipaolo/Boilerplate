import React from 'react';

import LottieView from 'lottie-react-native';

import { ANIMATION_DATA } from './constants';
import styles from './styles';
import { type PropsTypes } from './types';

/**
 * P.N. to use it, you should:
 *
 * @example
 * import Lottie from './components/Lottie';
 *
 * <Lottie
 *  id="example"
 * style={{
 *  width: 100,
 * height: 100,
 * }}
 */

const Lottie = React.forwardRef((props: PropsTypes, ref: any) => {
  const { id, style, ...rest } = props;

  return (
    <LottieView
      ref={ref}
      source={ANIMATION_DATA[id]}
      style={[styles.lottie, style]}
      autoPlay
      loop
      {...rest}
    />
  );
});

export default Lottie;
