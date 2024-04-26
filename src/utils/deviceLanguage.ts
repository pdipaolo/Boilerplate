import {supportedLanguages} from '../translations/constants';

import {locale} from './platform';

// TODO: add tests with detox
function deviceLanguage(): string | undefined {
  const [lowerCaseLocale] = locale().split('_');
  // TODO: improve it, locale and lang should be in 'it_IT' form for both ios and android.
  if (supportedLanguages.includes(lowerCaseLocale)) {
    return lowerCaseLocale;
  }
  return;
}

export {deviceLanguage};
