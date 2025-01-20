import { Platform, I18nManager, Linking } from 'react-native';
import { getLocales } from 'react-native-localize';
import { DeviceTypes } from './devicesTypes';
import { getBrand } from 'react-native-device-info';

function isIos(): boolean {
  return !!(Platform.OS === 'ios');
};

function isAndroid(): boolean {
  return !!(Platform.OS === 'android');
};

function locale() {
  return isIos() ? getLocales()[0].languageCode : I18nManager.getConstants().localeIdentifier;
};

function getBrands(): (typeof DeviceTypes)[keyof typeof DeviceTypes] {
  const brand = getBrand();
  switch (brand) {
    case 'Apple':
      return DeviceTypes.IOS;
    case 'HUAWEI':
      return DeviceTypes.HUAWEI;
    default:
      return DeviceTypes.ANDROID;
  }
}

async function openDeviceStore(urls: {
  android: string;
  ios: string;
  huawei?: string;
}) {
  const { android, ios, huawei } = urls;

  if (getBrands() === DeviceTypes.HUAWEI && huawei) {
    Linking.openURL(huawei);
  } else if (isAndroid()) {
    Linking.openURL(android);
  } else if (isIos()) {
    try {
      const supported = await Linking.canOpenURL(ios);
      if (supported) {
        Linking.openURL(ios);
      }
    } catch (error) {
      // manage error
    }
  } else {
    // manage error
  }
}

export { locale, isIos, openDeviceStore, isAndroid };
