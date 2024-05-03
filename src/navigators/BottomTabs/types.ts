import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { type RouteProp } from '@react-navigation/native';

import { tab1Route } from '../../screens/Tab1/route';
import { tab2Route } from '../../screens/Tab2/route';
import { tab3Route } from '../../screens/Tab3/route';
import { tab4Route } from '../../screens/Tab4/route';
import { tab5Route } from '../../screens/Tab5/route';

type BottomTabsParamsList = {
  [tab1Route]: undefined;
  [tab2Route]?: undefined;
  [tab3Route]?: undefined;
  [tab4Route]: undefined;
  [tab5Route]?: undefined;
};

export { type RouteProp, type BottomTabBarProps, type BottomTabsParamsList };
