import { type BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';

import { type BottomTabsParamsList, type RouteProp } from './types';

const useRNNavigation = () =>
  useNavigation<BottomTabNavigationProp<BottomTabsParamsList>>();

const useRNRoute = <T extends keyof BottomTabsParamsList>() =>
  useRoute<RouteProp<BottomTabsParamsList, T>>();

export {
  useRNNavigation as useBottomTabNavigation,
  useRNRoute as useBottomTabRoute,
};
