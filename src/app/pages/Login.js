import { Link } from 'react-router-dom';
import { Translate as t } from 'app/translations';
import { ALL_USERS } from '../api/ApiEndpoints';
import useHttpGet from '../api/useHttpGet';

const Login = (props) => {
	const [data, loading, error, refetch] = useHttpGet(ALL_USERS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<>
			<div className='login'>
				<p>{t('login')}</p>
				<Link to='/home' className='button'>
					Login
				</Link>
			</div>
			<hr></hr>
			<div>
				<button onClick={refetch}>refetch</button>
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</div>

		</>
	);
};

export default Login;
