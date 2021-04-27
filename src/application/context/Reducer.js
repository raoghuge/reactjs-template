import { CHANGE_THEME, CHANGE_LANG, INITIALIZE } from './Types';
import StorageUtils from '../../utils/StorageUtils';

const Reducer = (state, action) => {
    console.log('In reducer', state, action)
    switch (action.type) {
        case CHANGE_THEME:
            alert('changing theme' + action.payload);
            StorageUtils.set('theme', action.payload);
            return { ...state, theme: action.payload };
        case CHANGE_LANG:
            StorageUtils.set('lang', action.payload);
            return { ...state, lang: action.payload };
        case INITIALIZE: 
        alert('Init');  
            let t = StorageUtils.get('theme');
            let l = StorageUtils.get('lang');

            return { ...state, ...action.payload, ...{theme: t, lang : l}}
        default:
            return state;
    }
}

export default Reducer;