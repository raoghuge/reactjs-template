import en from './en';
import hi from './hi';
import { StoreContext } from 'app/context/Store';
import { useContext } from 'react';

const translations = {
	hi,
	en
};

const Translate = (
	key,
	locale = 'en'
) => {
	const { state } = useContext(StoreContext);
	locale = state.lang;

	const currTranslation = translations[locale] || en;
	let transWord = currTranslation[key]
		? currTranslation[key]
		: en[key]
			? en[key]
			: key;

	return transWord;
};

export { Translate };