import { type RouteProp } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  type StackNavigationOptions,
  type StackCardInterpolationProps,
  type StackCardInterpolatedStyle,
} from '@react-navigation/stack';

import { introRoute } from '../../screens/Intro/route';
import { tab1Route } from '../../screens/Tab1/route';


type StackParamsList = {
  [introRoute]: undefined;
  [tab1Route]: undefined;
};

export {
  type RouteProp,
  type NativeStackNavigationProp,
  type StackNavigationOptions as StackOptions,
  type StackCardInterpolationProps,
  type StackCardInterpolatedStyle,
  type StackParamsList,
};
