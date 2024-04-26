const IT: 'it' = 'it';
const EN: 'en' = 'en';

const LANGUAGES = {
  IT,
  EN,
};

const supportedLanguages: Array<typeof LANGUAGES.EN | typeof LANGUAGES.IT> = [
  LANGUAGES.EN,
  LANGUAGES.IT,
];

const DEFAULT_LANGUAGE = LANGUAGES.IT;

export {LANGUAGES, supportedLanguages, DEFAULT_LANGUAGE};
