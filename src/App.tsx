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
import { thunkFetchConfiguration, thunkUpdateUser } from './redux/services';
import AppUpdateModal from './components/AppUpdateModal';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

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

  // Handle user state changes
  async function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    const { dispatch } = store;
    dispatch(thunkUpdateUser(user));
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
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
            <AppUpdateModal />
          </I18nextProvider>
        </Provider>
      </RealmProvider>
  );
}

export default App;
