import { CardStyleInterpolators } from '@react-navigation/stack';
import component from './';

const name = 'CreateAccount';

const route = {
  name,
  component,
  options: {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  }
};

export default route;
export { name as createAccountRoute };
