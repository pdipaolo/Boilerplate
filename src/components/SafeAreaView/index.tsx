import React from 'react';

import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { type PropsTypes } from './types';

function SafeAreaView(props: PropsTypes): JSX.Element {
  const { edges, style: passedStyle, children } = props;
  return (
    <RNSafeAreaView style={[styles.safeArea, passedStyle]} edges={edges}>
      {children}
    </RNSafeAreaView>
  );
}

export default SafeAreaView;
