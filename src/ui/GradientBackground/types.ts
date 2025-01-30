import { AnimatedProp, Color } from "@shopify/react-native-skia";

type PropsTypes = {
  start?: Point;
  end?: Point;
  colors: AnimatedProp<Color[]>;
  children: JSX.Element;
};

type Point = {
  x: number;
  y: number;
}

export { type PropsTypes };
