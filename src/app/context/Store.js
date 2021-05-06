import React, { useReducer } from 'react';
import Reducer from 'app/context/Reducer';

const initialState = {
	theme: 'light', 
	lang : 'en'
};

function Store(props) {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<StoreContext.Provider value={{state, dispatch}}>
			{props.children}
		</StoreContext.Provider>
	);
}

export const StoreContext = React.createContext(initialState);
export default Store;
