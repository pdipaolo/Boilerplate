import React from 'react';

import { type SvgProps } from 'react-native-svg';

import Bonus from '../../assets/svg/bonus.svg';

const ICON = {
  // General
  BONUS: 'bonus' as 'bonus',
};

const ICON_COMPONENT = {
  // General
  BONUS: {
    ID: ICON.BONUS,
    COMPONENT: (props: SvgProps) => <Bonus {...props} />,
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

export { ICON, findIconById };
