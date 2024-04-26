import {type CustomTypeOptions} from 'i18next';

import {type TxKeyPath} from './types';

import i18next from './';

function translate(key: TxKeyPath, options?: CustomTypeOptions): string {
  return options ? i18next.t(key, options) : i18next.t(key);
}

export {translate};
