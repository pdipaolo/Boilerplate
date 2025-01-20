import React from 'react';

import { View, Pressable } from 'react-native';

import { type BottomTabBarProps } from '../../navigators/HomeTabs/types';
import theme from '../../theme';


import { TAB_ITEM } from './costants';
import { styles } from './styles';
import Icon from '../../ui/Icon';
import { ICON_MODE } from '../../ui/Icon/constants';
import Text from '../../ui/Text';

function TabBar(props: BottomTabBarProps): JSX.Element {
  const { state, navigation } = props;
  const { routes, index: stateIndex } = state;
  const { navigate } = navigation;
  return (
      <View style={styles.container}>
        {routes.map((route, index) => {
          const isFocused = index === stateIndex;

          return (
            <Pressable
              key={index}
              style={styles.item}
              onPress={() => {
                navigate(route.name, { ...route.params });
              }}
            >
              <Icon
                id={`${TAB_ITEM[route.name].icon}-${
                  isFocused ? ICON_MODE.FILLED : ICON_MODE.OUTLINED
                }`}
                primaryColor={theme.palette.primary.main}
              />

              <Text style={[styles.text, isFocused && styles.focused]}>
                {TAB_ITEM[route.name].title}
              </Text>
            </Pressable>
          );
        })}
      </View>
  );
}

export default TabBar;
