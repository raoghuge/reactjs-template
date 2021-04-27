import { Link } from 'react-router-dom';
import { Translate as t } from '../translations';
import { StoreContext } from '../application/context/Store';
import { useContext, useEffect } from 'react';
import { CHANGE_LANG, INITIALIZE } from '../application/context/Types';
import LanguageSwitcher from '../translations/LanguageSwitcher';

const Login = (props) => {
	const context = useContext(StoreContext);
	useEffect(() => {
		context.dispatch({type: INITIALIZE});
	 
	}, [])

	return (
		<>
		<LanguageSwitcher></LanguageSwitcher>
			<div className='login'>
				<p>{t('login')}</p>
				<Link to='/home' className='button'>
					Login
				</Link>
			</div>
		</>
	);
};

export default Login;
