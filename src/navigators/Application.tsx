import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import BottomTabs from './HomeTabs';

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
