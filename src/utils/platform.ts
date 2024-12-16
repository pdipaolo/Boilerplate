import {NativeModules, Platform, I18nManager} from 'react-native';

function isIos(): boolean {
  return !!(Platform.OS === 'ios');
}

function locale() {

  return isIos()
    ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : I18nManager.getConstants().localeIdentifier;
}

export {locale, isIos };
