import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from '../HomeTabs';
import { routes } from './constants';

const Stack = createNativeStackNavigator();

function RootStack(): JSX.Element {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }}/>
      {routes.map((route) => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  );
}

export default RootStack;
