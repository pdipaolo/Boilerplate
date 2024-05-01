import { createStackNavigator } from '@react-navigation/stack';

import bottomTabsRoute from '../../screens/BottomTabs/route';
import introRoute from '../../screens/Intro/route';

import { type StackParamsList } from './types';

const Stack = createStackNavigator<StackParamsList>();
const StackNavigator = Stack.Navigator;
const StackScreen = Stack.Screen;

const routes = [
  introRoute,
  bottomTabsRoute,
];

export { StackNavigator, StackScreen, routes };
