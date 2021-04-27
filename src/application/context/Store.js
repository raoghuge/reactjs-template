import React,{useReducer, useEffect} from 'react';
import StorageUtils from '../../utils/StorageUtils';
import Reducer from './Reducer';

const initialState = {
    theme: 'light', 
    lang : 'en'
};

function Store(props) {

    console.log(props);
    const [state, dispatch] = useReducer(Reducer,initialState);
    
    useEffect(() => {
        let theme = StorageUtils.get('theme');
        let lang = StorageUtils.get('lang');
        dispatch({action: 'INITIALIZE', payload:{theme, lang }})
    }, [])

    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export const StoreContext = React.createContext(initialState);
export default Store;
