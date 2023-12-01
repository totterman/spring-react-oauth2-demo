import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { GreetingLoader, GreetingPage } from './pages/GreetingPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';

/*
 * Main navigation and error handling
 * Greetings data is provided by a DataLoader
 */
const AdminPage = lazy(() => import('./pages/AdminPage'));
const routesConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'greetings',
        element: <GreetingPage />,
        loader: GreetingLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: 'admin',
        element: (
          <Suspense
            fallback={<div className="text-center p-5 text-xl text-slate-900">Loading...</div>}
          >
            <AdminPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig, {
  basename: document.querySelector('base')?.getAttribute('href') ?? '/',
});

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
