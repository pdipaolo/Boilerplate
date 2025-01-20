import React from 'react';

import TabBar from '../../components/TabBar';
import { bottomRoutes } from './constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function HomeTabs(): JSX.Element {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        unmountOnBlur: true,
      }}
    >
      {bottomRoutes.map((route) => (
        <Tab.Screen
          key={route.name}
          {...route}
        />
      ))}
    </Tab.Navigator>
  );
}

export default HomeTabs;
