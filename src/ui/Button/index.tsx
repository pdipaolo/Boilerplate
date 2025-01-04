/*
* @example
* import Button from '../ui/Button';
* import { ICON } from './ui/Icon/constants';
*
* <Button type={ButtonType.normal} textColor='black' onPress={() => console.log('Button pressed')}>Press me</Button>
*/

import React from 'react';

import { Pressable } from 'react-native';

import { styles } from './styles';
import { type PropsTypes, ButtonType } from './types';
import Text from '../Text';
import Icon from '../Icon';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

function Button({
  type,
  color,
  textColor,
  icon,
  isDisabled,
  isRippleDisabled,
  style: propStyles,
  children, onPress,
  onPressIn,
  onPressOut,
  onLongPress
}: PropsTypes): JSX.Element {

  const mainStyles = styles(color, textColor);

  const buttonStyle = (() => {
    switch (type) {
      case ButtonType.outlined:
        return mainStyles.text;
      case ButtonType.text:
        return mainStyles.text;
      case ButtonType.elevation:
        return mainStyles.elevation;
      default:
        return null;
    }
  })();

  const rippleScale = useSharedValue(0);
  const rippleOpacity = useSharedValue(0);

  const startRipple = () => {
    rippleScale.value = 0;
    rippleOpacity.value = 1;
    rippleScale.value = withTiming(1, { duration: 300 }, () => {
      rippleOpacity.value = withSpring(0, { duration: 300 });
    });
  };

  const rippleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: rippleScale.value }],
    opacity: rippleOpacity.value,
  }));

  const handlePress = () => {
    !isRippleDisabled && startRipple();
    onPress();
  };

  return (
    <Pressable
      style={[mainStyles.button, propStyles, buttonStyle, isDisabled && mainStyles.disabled]}
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      disabled={isDisabled}
    >

      {icon && <Icon id={icon} style={mainStyles.icon} />}
      <Text style={[mainStyles.textWrapper, type === ButtonType.outlined && mainStyles.outlined]}>
        {children}
      </Text>
      <Animated.View style={[mainStyles.ripple, rippleStyle]} >
      </Animated.View>
    </Pressable>
  );
}

export default Button;
export { ButtonType };