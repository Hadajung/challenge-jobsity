import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
// import * as RNLocalize from 'react-native-localize';
import {getLocales} from 'react-native-localize';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      explore: 'Explore...',
      episodes: 'Episodes',
      error: 'Oops! An error occured :( Try later.',
      myList: 'My List',
      searchPlaceholder: 'Find Something...',
      results: 'Results',
      noResult: 'Nothing here :(',
    },
  },
  ko: {
    translation: {
      explore: '아무거나 골라보세요..',
      episodes: '에피소드',
      error: '뭔가 문제가 생겼어요 :( 나중에 다시 시도하세요.',
      myList: '내 리스트',
      searchPlaceholder: '검색해보세요...',
      results: '개 결과',
      noResult: '검색 결과가 없어요 :(',
    },
  },
  pt: {
    translation: {
      explore: 'Explore...',
      episodes: 'Episódios',
      error: 'Oops! Aconteceu alguma coisa :( Tente mais tarde ',
      myList: 'Minha lista',
      searchPlaceholder: 'Digite aqui...',
      results: 'Resultados',
      noResult: 'Nada aqui por enquanto :(',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLocales()[0].languageCode,
    fallbackLng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
