import React, { useReducer, useEffect } from 'react';
import Reducer from 'app/context/Reducer';
import useLocalStorage from 'app/utils/useLocalStorage';

const initialState = {
	theme: 'light', 
	lang : 'en'
};

function Store(props) {
	const [state, dispatch] = useReducer(Reducer, initialState);
	const [lang, setLang] = useLocalStorage('lang', 'en');
	const [theme, setTheme] = useLocalStorage('theme','light');
    
	useEffect(() => {
		dispatch({action: 'INITIALIZE', payload:{theme, lang }});
	}, []);

	return (
		<StoreContext.Provider value={{state, dispatch}}>
			{props.children}
		</StoreContext.Provider>
	);
}

export const StoreContext = React.createContext(initialState);
export default Store;
