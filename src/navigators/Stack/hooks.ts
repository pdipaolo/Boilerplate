import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

import { type StackParamsList, type RouteProp } from './types';

const useRNNavigation = () =>
  useNavigation<NativeStackNavigationProp<StackParamsList>>();

const useRNRoute = <T extends keyof StackParamsList>() =>
  useRoute<RouteProp<StackParamsList, T>>();

export {
  useRNNavigation as useNavigation,
  useRNRoute as useRoute,
  useFocusEffect,
};
