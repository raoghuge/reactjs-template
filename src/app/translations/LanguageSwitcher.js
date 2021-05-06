import React, { useContext } from 'react';
import { StoreContext } from 'app/context/Store';
 
import { CHANGE_LANG } from 'app/context/Types';
import useLocalStorage from '../utils/useLocalStorage';

const LanguageSwitcher = () => {
	const [lang, setLang] = useLocalStorage('lang');
	const context = useContext(StoreContext);
  console.log(lang);
	const changeLang = (lang) => {
		setLang(lang);
		context.dispatch({ type: CHANGE_LANG, payload: lang});
	};

	return (
		<>
			<button onClick={() => changeLang('hi')}>
				Hindi
			</button>
			<button onClick={() => changeLang('en')}>
				English
			</button>
		</>
	);
};

export default LanguageSwitcher;
