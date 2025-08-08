import { createBrowserRouter, Navigate } from 'react-router-dom';
import { GitApp } from '../GitApp';

import { /*ListView */ IssueView } from '../issues/views';
import { ListViewInfinute } from '../issues/views/ListViewInfiniteScroll';

export const router = createBrowserRouter([
	{
		path: '/issues',
		element: <GitApp />,
		children: [
			// { path: 'list', element: <ListView /> },
			{ path: 'list-inifite', element: <ListViewInfinute /> },

			{ path: 'issue/:issueNumber', element: <IssueView /> },
			{ path: '*', element: <Navigate to='list' /> },
		],
	},
	{
		path: '/',
		element: <Navigate to='issues/list' />,
	},
	{
		path: '*',
		element: <h1>Not found</h1>,
	},
]);
