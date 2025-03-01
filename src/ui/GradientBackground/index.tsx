import React from 'react';

import {
  Canvas,
  Rect,
  LinearGradient,
  vec
} from "@shopify/react-native-skia";
import { Dimensions, View } from 'react-native';
import { PropsTypes } from './types';
import { styles } from './styles';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function GradientBackground({ start, end, colors, children }: PropsTypes): JSX.Element {
  return (
    <View style={{width, height}}>
    <Canvas style={[styles.wrapper, { width, height }]}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={start || vec(0, 0)}
          end={end || vec(0, 256)}
          colors={colors}
        />
      </Rect>
    </Canvas>
    {children}
    </View>
  );
}

export default GradientBackground;
