import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { type BottomTabsParamsList } from './types';
import tab1Route from '../../screens/Tab1/route';
import tab2Route from '../../screens/Tab2/route';
import tab3Route from '../../screens/Tab3/route';
import tab4Route from '../../screens/Tab4/route';
import tab5Route from '../../screens/Tab5/route';

const BottomTabs = createBottomTabNavigator<BottomTabsParamsList>();
const BottomTabsNavigator = BottomTabs.Navigator;
const BottomTabsScreen = BottomTabs.Screen;

const routes = [tab1Route, tab2Route, tab3Route, tab4Route, tab5Route];

export { BottomTabsNavigator, BottomTabsScreen, routes };