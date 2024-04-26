import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Example} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Example" component={Example} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
