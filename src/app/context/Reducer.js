import { CHANGE_THEME, CHANGE_LANG, INITIALIZE } from './Types';
import StorageUtils from 'app/utils/StorageUtils';

const Reducer = (state, action) => {
	switch (action.type) {
	case CHANGE_THEME:
		StorageUtils.set('theme', action.payload);
		return { ...state, theme: action.payload };
	case CHANGE_LANG:
		StorageUtils.set('lang', action.payload);
		return { ...state, lang: action.payload };
	case INITIALIZE: 
		let t = StorageUtils.get('theme');
		let l = StorageUtils.get('lang');

		return { ...state, ...action.payload, ...{theme: t, lang : l}};
	default:
		return state;
	}
};

export default Reducer;