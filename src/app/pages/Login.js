import { Link } from 'react-router-dom';
import { Translate as t } from 'app/translations';
// import { StoreContext } from 'app/context/Store';
// import { useContext, useEffect } from 'react';
// import { INITIALIZE } from 'app/context/Types';

const Login = (props) => {
	// const context = useContext(StoreContext);
	// useEffect(() => {
	// 	// context.dispatch({type: INITIALIZE});
	// });

	return (
		<>
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
