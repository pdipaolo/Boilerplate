import React from 'react';

import TabBar from '../../components/TabBar';
// import Header from '../../componentsConnected/Header';

import { BottomTabsNavigator, BottomTabsScreen, routes } from './constants';

function BottomTabs(): JSX.Element {
  return (
    <BottomTabsNavigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        unmountOnBlur: true,
      }}
    >
      {routes.map((route) => (
        <BottomTabsScreen
          key={route.name}
          {...route}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            // header: () => <Header />,
          }}
        />
      ))}
    </BottomTabsNavigator>
  );
}

export default BottomTabs;
