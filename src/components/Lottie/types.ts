import { type LottieViewProps } from 'lottie-react-native';

import { ANIMATION } from './constants';

type BasePropsTypes = {
  id: (typeof ANIMATION)[keyof typeof ANIMATION];
};

type PropsTypes = BasePropsTypes & Omit<LottieViewProps, 'source'>;

export { type PropsTypes };
