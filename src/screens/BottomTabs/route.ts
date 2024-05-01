import BottomTabs from '../../navigators/BottomTabs';

const name = 'BottomTabs';

const route = {
  name,
  component: BottomTabs,
  options: {
    headerShown: false,
  },
};

export default route;
export { name as bottomTabsRoute };
