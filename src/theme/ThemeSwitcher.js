import { useContext, useEffect } from "react"
import { StoreContext } from '../application/context/Store';
import { CHANGE_THEME } from "../application/context/Types";
import StorageUtils from "../utils/StorageUtils";
import Themes from './Themes';


const ThemeSwitcher = () => {

    const context = useContext(StoreContext);
    console.log(context);
    
    useEffect(() => {
        alert('Theme Switcher is initialized');
        let theme = StorageUtils.get('theme');
        if(theme) {
            change(theme);
        }
    }, [])

    const change = (theme = 'light') => {
        context.dispatch({action: CHANGE_THEME, payload: theme});
        if (Themes[theme]) {
            // console.log(Themes[theme]);
            StorageUtils.set('theme', theme);
           

            for (var key in Themes[theme]) {
                if (Themes[theme].hasOwnProperty(key)) {
                    // console.log(key + " -> " + Themes[theme][key]);
                    document.documentElement.style.setProperty(key, Themes[theme][key]);
                }
            }
        }
    }

    return (
        <>
            <button onClick={() => change('light')}> Light </button>
            <button onClick={() => change('dark')}> Dark </button>
        </>
    )
}

export default ThemeSwitcher;
