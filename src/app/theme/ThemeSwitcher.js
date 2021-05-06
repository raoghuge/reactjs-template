import { useContext, useEffect } from "react";
import { StoreContext } from 'app/context/Store';
import { CHANGE_THEME } from "app/context/Types";
import useLocalStorage from '../utils/useLocalStorage';
import Themes from './Themes';



const ThemeSwitcher = () => {
	const context = useContext(StoreContext);
	const [theme, setTheme]  = useLocalStorage('theme');

	useEffect(() => {
		change(theme);
	 
	}, [theme]);

	const change = (theme = 'light') => {
		context.dispatch({action: CHANGE_THEME, payload: theme});
		if (Themes[theme]) 
		{
			setTheme(theme);		
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
