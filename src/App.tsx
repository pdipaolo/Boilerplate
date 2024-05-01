/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import {StatusBar, useColorScheme} from 'react-native';

import BootSplash from "react-native-bootsplash";

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ApplicationNavigator from './navigators/Application';
import {Provider} from 'react-redux';
import {store} from './redux';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ApplicationNavigator />
      </I18nextProvider>
    </Provider>
  );
}

export default App;
