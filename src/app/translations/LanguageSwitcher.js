import React from 'react';
import StorageUtils from 'app/utils/StorageUtils';
import { StoreContext } from 'app/context/Store';
import { useContext, useEffect } from 'react';
import { CHANGE_LANG } from 'app/context/Types';

const LanguageSwitcher = () => {
	const context = useContext(StoreContext);
	useEffect(() => {
		let lang = StorageUtils.get('lang');
		if(lang) {
			changeLang(lang);
		}
	});

	const changeLang = (lang) => {
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
