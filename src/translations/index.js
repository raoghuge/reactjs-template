import en from './en';
import hi from './hi';
import { StoreContext } from '../application/context/Store';
import { useContext } from 'react';

const translations = {
    hi,
    en
};
const Translate = (
    key,
    locale = 'en'
) => {
    const { state, dispatch } = useContext(StoreContext);
    console.log('State in Translator', state);
    locale = state.lang;

    const currTranslation = translations[locale] ? translations[locale] : en;
    let transWord = currTranslation[key]
        ? currTranslation[key]
        : en[key]
            ? en[key]
            : key;

    return transWord;
};

export { Translate };