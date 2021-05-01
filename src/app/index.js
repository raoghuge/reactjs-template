import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import routes from 'app/routes';
import RouteWithSubRoutes from 'app/utils/RouteWithSubRoutes';
import { Suspense } from 'react';
import Loader from 'app/loader/Loader';
import Store from 'app/context/Store';


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