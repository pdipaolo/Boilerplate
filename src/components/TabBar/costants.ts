import { translate } from '../../translations/translate';
import tab1Route from '../../screens/Tab1/route';
import tab2Route from '../../screens/Tab2/route';
import tab3Route from '../../screens/Tab3/route';
import tab4Route from '../../screens/Tab4/route';
import tab5Route from '../../screens/Tab5/route';
import { BOTTOM_NAV_ICON } from '../Icon/constants';

const TAB_ITEM = {
  [tab1Route.name]: {
    title: translate('tab1.tabTitle'),
    icon: BOTTOM_NAV_ICON.TAB1,
  },
  [tab2Route.name]: {
    title: translate('tab2.tabTitle'),
    icon: BOTTOM_NAV_ICON.TAB2,
  },
  [tab3Route.name]: {
    title: translate('tab3.tabTitle'),
    icon: BOTTOM_NAV_ICON.TAB3,
  },
  [tab4Route.name]: {
    title: translate('tab4.tabTitle'),
    icon: BOTTOM_NAV_ICON.TAB4,
  },
  [tab5Route.name]: {
    title: translate('tab5.tabTitle'),
    icon: BOTTOM_NAV_ICON.TAB5,
  },
};

export { TAB_ITEM };
