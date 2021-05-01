import { CHANGE_THEME, CHANGE_LANG, INITIALIZE } from './Types';

const Reducer = (state, action) => {
	switch (action.type) {
	case CHANGE_THEME:
		return { ...state, theme: action.payload };
	case CHANGE_LANG:
		return { ...state, lang: action.payload };
	case INITIALIZE: 
		return { ...state, ...action.payload};
	default:
		return state;
	}
};

export default Reducer;