import React from 'react';

import { routes } from './constants';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const StackScreen = Stack.Screen;
function RootStack(): JSX.Element {

  return (
    <Stack.Navigator >
      {routes.map((route) => (<StackScreen key={route.name} {...route} />)) }
    </Stack.Navigator>
  );
}

export default RootStack;
