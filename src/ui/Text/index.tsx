import React from 'react';

import { Text as RNText } from 'react-native';

import { styles } from './styles';
import { type PropsTypes } from './types';

function Text(props: PropsTypes): JSX.Element {
  const { style: propStyles, children, onPress } = props;
  return (
    <RNText
      style={[styles.text, propStyles]}
      adjustsFontSizeToFit={false}
      allowFontScaling={false}
      onPress={onPress}
    >
      {children}
    </RNText>
  );
}

export default Text;
