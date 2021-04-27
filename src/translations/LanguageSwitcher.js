import React from 'react'
import StorageUtils from '../utils/StorageUtils';
import { StoreContext } from '../application/context/Store';
import { useContext, useEffect } from 'react';
import { CHANGE_LANG, INITIALIZE } from '../application/context/Types';

function LanguageSwitcher() {
  
    const context = useContext(StoreContext);
	useEffect(() => {
		let l = StorageUtils.get('lang');
        if(l) {
            changeLang(l);
        }
	}, [])

	const changeLang = lang => {
		context.dispatch({ type: CHANGE_LANG, payload: lang});
	}

    return (
        <>
			<button onClick={() => changeLang('hi')}>
				Hindi
			</button>
			<button onClick={() => changeLang('en')}>
				English
			</button>
        </>
    )
}

export default LanguageSwitcher
