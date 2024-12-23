import {Platform, I18nManager} from 'react-native';
import { getLocales } from 'react-native-localize';

function isIos(): boolean {
  return !!(Platform.OS === 'ios');
}

function locale() {
  return isIos() ? getLocales()[0].languageCode : I18nManager.getConstants().localeIdentifier;
}

export {locale, isIos };
