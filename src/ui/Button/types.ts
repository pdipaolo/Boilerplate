import React from "react";
import { ViewStyle } from "react-native";
import { ICON } from "../Icon/constants";

enum ButtonType {
  normal = "normal",
  text = "text",
  outlined = "outlined",
  elevation = "elevation"
};

type PropsTypes = {
  style?: ViewStyle;
  type?: ButtonType;
  color?: string;
  textColor?: string;
  icon?: (typeof ICON)[keyof typeof ICON];
  isDisabled?: boolean;
  isRippleDisabled?: boolean;
  onPress: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
  children: React.ReactNode;
};

export { type PropsTypes, ButtonType };
