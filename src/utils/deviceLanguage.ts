import {supportedLanguages} from '../translations/constants';

import {locale} from './platform';

function deviceLanguage(): string | undefined {
  const [lowerCaseLocale] = locale().split('_');

  if (supportedLanguages.includes(lowerCaseLocale)) {
    return lowerCaseLocale;
  }
  return undefined;
}

export {deviceLanguage};
