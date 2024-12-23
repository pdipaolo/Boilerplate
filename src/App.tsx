/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

import { StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import ApplicationNavigator from './navigators/Application';
import { Provider } from 'react-redux';
import { store } from './redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Loader } from './components/Loader';
import BootSplash from './screens/BootSplash';
import { RealmProvider } from './database';
import { thunkFetchConfiguration } from './redux/services';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const init = async () => {
      const { dispatch } = store;
      await dispatch(thunkFetchConfiguration());
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
    });
  }, []);

  return (
    <RealmProvider>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          {bootSplashIsVisible && (
            <BootSplash
              onAnimationEnd={() => {
                setBootSplashIsVisible(false);
              }}
            />
          )}
          <ApplicationNavigator />
          <Loader />
        </I18nextProvider>
      </Provider>
    </RealmProvider>
  );
}

export default App;
