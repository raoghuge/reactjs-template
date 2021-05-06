import { useContext, useEffect } from 'react';
import './auth.css';
import { Translate as t } from 'app/translations';
import Fade from 'react-reveal/Fade';

import useLocalStorage from 'app/utils/useLocalStorage';
import { StoreContext } from '../../context/Store';
import { INITIALIZE } from 'app/context/Types';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
// import useHttp from '../../api/useHttp';

const Login = (props) => {
	const context = useContext(StoreContext);
	const [lang] = useLocalStorage('lang');
	const [theme] = useLocalStorage('theme');
	// const [{ data, isLoading, isError }] = useHttp('/posts');

	// console.log(t);
	useEffect(() => {
		// if (isLoading) {
		// 	console.log('Loading');
		// }

		// if (isError) {
		// 	console.log('Error');
		// }
		context.dispatch({ type: INITIALIZE, payload: { ...context.state, lang, theme } });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme, lang]);

	return (
		<>
			<Header></Header>
	
			<div class="container" >
			<Fade top>
				<div class="wrap">

		
				<form class="login-form" action="">
					<div class="form-header">
						<h3>{t('login')}</h3>
						<p>Login to access your dashboard</p>
					</div>

					<div class="form-group">
						<input type="text" class="form-input" placeholder="email@example.com" />
					</div>

					<div class="form-group">
						<input type="password" class="form-input" placeholder="password" />
					</div>

					<div class="form-group">
						<Link to='/home' className='button'>
							<button class="form-button" type="submit">Login</button>
						</Link>

					</div>
					<div class="form-footer">
						Don't have an account? <a href="#">Sign Up</a>
					</div>
				</form>
				</div>
				</Fade>
			</div>
		
		</>
	);
};

export default Login;
