import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from '../HomeTabs';
import { routes } from './constants';
import { useAppSelector } from '../../redux';
import { RootState } from '../../redux/store';

const Stack = createNativeStackNavigator();

function RootStack(): JSX.Element {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.login.isLoggedIn,
  );

  return (
    <Stack.Navigator >
      {!isLoggedIn ? routes.map((route) => (
        <Stack.Screen key={route.name} {...route} />
      )):<Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }}/>}
    </Stack.Navigator>
  );
}

export default RootStack;
