import { useContext, useEffect } from "react";
import { StoreContext } from 'app/context/Store';
import { CHANGE_THEME } from "app/context/Types";
import useLocalStorage from '../utils/useLocalStorage';
import Themes from './Themes';


const useTheme = (t) => {
	const context = useContext(StoreContext);
	const [theme, setTheme]  = useLocalStorage('theme');

 useEffect(() => {
  context.dispatch({action: CHANGE_THEME, payload: theme});
  if(t){
    setTheme(t);
  }
  if (Themes[theme]) 
  {
    setTheme(theme);		
    for (var key in Themes[theme]) {
      if (Themes[theme].hasOwnProperty(key)) {
        document.documentElement.style.setProperty(key, Themes[theme][key]);
      }
    }
  }
    
 }, []);

 const change = (theme) =>{
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

 return change;
};

export default useTheme;
