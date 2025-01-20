import React from 'react';

import { Pressable, View } from 'react-native';

import Text from '../../ui/Text';
import { useAppDispatch, useAppSelector } from '../../redux';
import { openDeviceStore } from '../../utils';

import { APP_UPDATE_TYPE } from './constants';
import { styles } from './styles';
import { translate } from '../../translations/translate';
import { selectorConfig } from '../../redux/selectors';
import { dismissAppUpdateModal } from '../../redux/slices';

function AppUpdateModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const CONFIG = useAppSelector(selectorConfig);

  if (!CONFIG || !CONFIG.app_update) {
    return <></>;
  }

  const {
    TYPE: appUpdateType,
    TITLE: appUpdateTitle,
    MESSAGE: appUpdateMessage,
    URL: appUpdateURL,
  } = JSON.parse(CONFIG.app_update as string);
  const { SOFT } = APP_UPDATE_TYPE;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>{appUpdateTitle}</Text>
            <Text style={styles.message}>
              {appUpdateType === SOFT
                ? appUpdateMessage.SOFT
                : appUpdateMessage.HARD}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() =>
                openDeviceStore({
                  android: appUpdateURL.ANDROID,
                  ios: appUpdateURL.IOS,
                })
              }
            >
              <Text>{translate('common.update')}</Text>
            </Pressable>

            {appUpdateType === SOFT && (
              <Pressable onPress={() => dispatch(dismissAppUpdateModal())}>
                <Text style={styles.cancelButtonText}>
                  {translate('common.cancel')}
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </>
  );
}

export default AppUpdateModal;
