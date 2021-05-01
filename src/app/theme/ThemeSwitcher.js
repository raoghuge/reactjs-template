import { useContext } from "react";
import { StoreContext } from 'app/context/Store';
import { CHANGE_THEME } from "app/context/Types";
import StorageUtils from "app/utils/StorageUtils";
import Themes from './Themes';


const ThemeSwitcher = () => {
	const context = useContext(StoreContext);
	const change = (theme = 'light') => {
		context.dispatch({action: CHANGE_THEME, payload: theme});
		if (Themes[theme]) {
			StorageUtils.set('theme', theme);
           

			for (var key in Themes[theme]) {
				if (Themes[theme].hasOwnProperty(key)) {
					document.documentElement.style.setProperty(key, Themes[theme][key]);
				}
			}
		}
	};

	return (
		<>
			<button onClick={() => change('light')}> Light </button>
			<button onClick={() => change('dark')}> Dark </button>
		</>
	);
};

export default ThemeSwitcher;
