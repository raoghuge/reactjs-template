import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import routes from './routes/Routes';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';
import { Suspense, useEffect } from 'react';
import Loader from './components/loader/Loader';
import Store from './application/context/Store';


function App() {

	return (
		<Store>
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Switch>
						<Redirect exact from='/' to='/login' />
						{routes.map((route, i) => (
							<RouteWithSubRoutes key={i} {...route} />
						))}
					</Switch>
				</Suspense>
			</BrowserRouter>
		</Store>
	);
}

export default App;



