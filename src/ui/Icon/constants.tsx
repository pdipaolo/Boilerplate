import React from 'react';

import { type SvgProps } from 'react-native-svg';

import ChevronLeftIcon from '../../assets/svg/chevron-left.svg';

import Tab1FilledIcon from '../../assets/svg/chevron-left.svg';
import Tab1OutlinedIcon from '../../assets/svg/chevron-left.svg';
import Tab2FilledIcon from '../../assets/svg/chevron-left.svg';
import Tab2OutlinedIcon from '../../assets/svg/chevron-left.svg';
import Tab3FilledIcon from '../../assets/svg/chevron-left.svg';
import Tab3OutlinedIcon from '../../assets/svg/chevron-left.svg';
import Tab4FilledIcon from '../../assets/svg/chevron-left.svg';
import Tab4OutlinedIcon from '../../assets/svg/chevron-left.svg';
import Tab5FilledIcon from '../../assets/svg/chevron-left.svg';
import Tab5OutlinedIcon from '../../assets/svg/chevron-left.svg';

const ICON_MODE = {
  FILLED: 'filled' as 'filled',
  OUTLINED: 'outlined' as 'outlined',
};

const BOTTOM_NAV_ICON = {
  TAB1: 'tab1' as 'tab1',
  TAB2: 'tab2' as 'tab2',
  TAB3: 'tab3' as 'tab3',
  TAB4: 'tab4' as 'tab4',
  TAB5: 'tab5' as 'tab5',
};

const ICON = {
  // General
  CHEVRON_LEFT: 'chevron-left' as 'chevron-left',
  // Tab
  TAB1_FILLED:
    `${BOTTOM_NAV_ICON.TAB1}-${ICON_MODE.FILLED}` as `${typeof BOTTOM_NAV_ICON.TAB1}-${typeof ICON_MODE.FILLED}`,
  TAB1_OUTLINED:
    `${BOTTOM_NAV_ICON.TAB1}-${ICON_MODE.OUTLINED}` as `${typeof BOTTOM_NAV_ICON.TAB1}-${typeof ICON_MODE.OUTLINED}`,
  TAB2_FILLED:
    `${BOTTOM_NAV_ICON.TAB2}-${ICON_MODE.FILLED}` as `${typeof BOTTOM_NAV_ICON.TAB2}-${typeof ICON_MODE.FILLED}`,
  TAB2_OUTLINED:
    `${BOTTOM_NAV_ICON.TAB2}-${ICON_MODE.OUTLINED}` as `${typeof BOTTOM_NAV_ICON.TAB2}-${typeof ICON_MODE.OUTLINED}`,
  TAB3_FILLED:
    `${BOTTOM_NAV_ICON.TAB3}-${ICON_MODE.FILLED}` as `${typeof BOTTOM_NAV_ICON.TAB3}-${typeof ICON_MODE.FILLED}`,
  TAB3_OUTLINED:
    `${BOTTOM_NAV_ICON.TAB3}-${ICON_MODE.OUTLINED}` as `${typeof BOTTOM_NAV_ICON.TAB3}-${typeof ICON_MODE.OUTLINED}`,
  TAB4_FILLED:
    `${BOTTOM_NAV_ICON.TAB4}-${ICON_MODE.FILLED}` as `${typeof BOTTOM_NAV_ICON.TAB4}-${typeof ICON_MODE.FILLED}`,
  TAB4_OUTLINED:
    `${BOTTOM_NAV_ICON.TAB4}-${ICON_MODE.OUTLINED}` as `${typeof BOTTOM_NAV_ICON.TAB4}-${typeof ICON_MODE.OUTLINED}`,
  TAB5_FILLED:
    `${BOTTOM_NAV_ICON.TAB5}-${ICON_MODE.FILLED}` as `${typeof BOTTOM_NAV_ICON.TAB5}-${typeof ICON_MODE.FILLED}`,
  TAB5_OUTLINED:
    `${BOTTOM_NAV_ICON.TAB5}-${ICON_MODE.OUTLINED}` as `${typeof BOTTOM_NAV_ICON.TAB5}-${typeof ICON_MODE.OUTLINED}`,
};

const ICON_COMPONENT = {
  // General
  CHEVRON_LEFT: {
    ID: ICON.CHEVRON_LEFT,
    COMPONENT: (props: SvgProps) => <ChevronLeftIcon {...props} />,
  },
  // Tab
  TAB1_FILLED: {
    ID: ICON.TAB1_FILLED,
    COMPONENT: (props: SvgProps) => <Tab1FilledIcon {...props} />,
  },
  TAB1_OUTLINED: {
    ID: ICON.TAB1_OUTLINED,
    COMPONENT: (props: SvgProps) => <Tab1OutlinedIcon {...props} />,
  },
  TAB2_FILLED: {
    ID: ICON.TAB2_FILLED,
    COMPONENT: (props: SvgProps) => <Tab2FilledIcon {...props} />,
  },
  TAB2_OUTLINED: {
    ID: ICON.TAB2_OUTLINED,
    COMPONENT: (props: SvgProps) => <Tab2OutlinedIcon {...props} />,
  },
  TAB3_FILLED: {
    ID: ICON.TAB3_FILLED,
    COMPONENT: (props: SvgProps) => <Tab3FilledIcon {...props} />,
  },
  TAB3_OUTLINED: {
    ID: ICON.TAB3_OUTLINED,
    COMPONENT: (props: SvgProps) => <Tab3OutlinedIcon {...props} />,
  },
  TAB4_FILLED: {
    ID: ICON.TAB4_FILLED,
    COMPONENT: (props: SvgProps) => <Tab4FilledIcon {...props} />,
  },
  TAB4_OUTLINED: {
    ID: ICON.TAB4_OUTLINED,
    COMPONENT: (props: SvgProps) => <Tab4OutlinedIcon {...props} />,
  },
  TAB5_FILLED: {
    ID: ICON.TAB5_FILLED,
    COMPONENT: (props: SvgProps) => <Tab5FilledIcon {...props} />,
  },
  TAB5_OUTLINED: {
    ID: ICON.TAB5_OUTLINED,
    COMPONENT: (props: SvgProps) => <Tab5OutlinedIcon {...props} />,
  },
};

function findIconById(
  id: (typeof ICON)[keyof typeof ICON] | undefined,
  props: SvgProps & {
    primaryColor: string;
    secondaryColor?: string;
    tertiaryColor?: string;
  },
): JSX.Element | undefined {
  const ICONS = Object.values(ICON_COMPONENT);
  const CURR_ICON = ICONS.find((obj) => obj.ID === id);
  return CURR_ICON?.COMPONENT(props);
}

export { ICON, BOTTOM_NAV_ICON, ICON_MODE, findIconById };
