import React from 'react';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Page1 from '../pages/Page1';
// import Page2 from '../pages/Page2';
import Subpage1 from '../pages/subpages/Subpage1';
import Subpage2 from '../pages/subpages/Subpage2';
const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const Page1 = React.lazy(() => import('../pages/Page1'));
const Page2 = React.lazy(() => import('../pages/Page2'));


const routes = [
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/home',
		component: Home,
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
