import React, { useReducer, useEffect } from 'react';
import StorageUtils from 'app/utils/StorageUtils';
import Reducer from 'app/context/Reducer';

const initialState = {
	theme: 'light', 
	lang : 'en'
};

function Store(props) {
	const [state, dispatch] = useReducer(Reducer, initialState);
    
	useEffect(() => {
		let theme = StorageUtils.get('theme');
		let lang = StorageUtils.get('lang');
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
