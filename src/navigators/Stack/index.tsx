import React from 'react';

import IconPrevScreen from '../../components/IconPrevScreen';
import theme from '../../theme';

import { StackNavigator, StackScreen, routes } from './constants';

function Stack(): JSX.Element {
  return (
    <StackNavigator
      screenOptions={{
        headerTitleStyle: {
          textAlign: 'center',
          fontSize: theme.typography.fontSize.m,
          fontFamily: theme.typography.fontFamily.extraBold,
          fontWeight: '800',
        },
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerLeft: IconPrevScreen,
      }}
    >
      {routes.map((route) => (
        <StackScreen key={route.name} {...route} />
      ))}
    </StackNavigator>
  );
}

export default Stack;
