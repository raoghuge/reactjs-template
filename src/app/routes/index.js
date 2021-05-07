import React from 'react';
import Subpage1 from 'app/pages/subpages/Subpage1';
import Subpage2 from 'app/pages/subpages/Subpage2';
import Dashboard from 'app/pages/dashboard/Dashboard';
// const Home = React.lazy(() => import('app/pages/Home'));
const Login = React.lazy(() => import('app/pages/auth/Login'));
const Page1 = React.lazy(() => import('app/pages/Page1'));
const Page2 = React.lazy(() => import('app/pages/Page2'));


const routes = [
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		routes: [
			{
				path: '/home/page1',
				component: Page1,
				routes: [
					{
						path: '/home/page1/subpage1',
						component: Subpage1,
					},
					{
						path: '/home/page1/subpage2',
						component: Subpage2,
					},
				],
			},
			{
				path: '/home/page2',
				component: Page2,
			},
		],
	},
];

export default routes;
