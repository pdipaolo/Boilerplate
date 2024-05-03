import {NativeModules, Platform} from 'react-native';

function isIos(): boolean {
  return !!(Platform.OS === 'ios');
}

function locale() {
  // TODO: add the right returning type
  return isIos()
    ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;
}

export {locale, isIos };
