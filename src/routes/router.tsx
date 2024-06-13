import NotFoundPage from 'pages/not-found/NotFoundPage';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import paths, { rootPaths } from './path';

/* ---------------- Lazy loads various components ------------------------- */
const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
// const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Dashboard = lazy(() => import('pages/dashboard'));

// const LoginPage = lazy(() => import('pages/authentication/login'));
// const SignUpPage = lazy(() => import('pages/authentication/register'));
// const ForgotPasswordPage = lazy(() => import('pages/authentication/forgot-password'));
// const PasswordResetPage = lazy(() => import('pages/authentication/reset-password'));
const TransactionPage = lazy(() => import('pages/transactions'));
const AccountPage = lazy(() => import('pages/accounts'));
const CreditCardPage = lazy(() => import('pages/credit-cards'));
const LoansPage = lazy(() => import('pages/loans'));
const InvestmentPage = lazy(() => import('pages/investments'));

// const NotFoundPage = lazy(() => import('pages/not-found'));
/* -------------------------------------------------------------------------- */

/**
 * @Defines the routes for the application using React Router.
 */
export const routes = [
  {
    element: (
      <Suspense fallback={<>Loading splash</>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.default,
        element: (
          <MainLayout>
            <Suspense fallback={<>Loading pagelaoder</>}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: '/transactions',
            element: <TransactionPage />,
          },
          {
            path: '/credit-cards',
            element: <CreditCardPage />,
          },
          {
            path: '/accounts',
            element: <AccountPage />,
          },
          {
            path: '/investments',
            element: <InvestmentPage />,
          },
          {
            path: '/loans',
            element: <LoansPage />,
          },
        ],
      },
      //   {
      //     path: rootPaths.authRoot,
      //     element: <AuthLayout />,
      //     children: [
      //       {
      //         path: paths.login,
      //         element: <LoginPage />,
      //       },
      //       {
      //         path: paths.signup,
      //         element: <SignUpPage />,
      //       },
      //       {
      //         path: paths.forgotPassword,
      //         element: <ForgotPasswordPage />,
      //       },
      //       {
      //         path: paths.resetPassword,
      //         element: <PasswordResetPage />,
      //       },
      //     ],
      //   },
      {
        path: rootPaths.errorRoot,
        children: [
          {
            path: paths.notFound,
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to={paths.notFound} replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: '/bankdash',
});

export default router;
