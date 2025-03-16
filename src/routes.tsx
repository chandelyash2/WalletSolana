import {
  Splash,
  AddWallet,
  RecoverWallet,
  CreateWallet,
  WalletBoard,
  // ReceiveSol,
  RecoverByPhrase,
  Send,
  //  SecretKey, 
  //  Dashboard,
    // Summary
} from './components/index';
import OnBoardingLayout from './components/onboarding-layout';
import PublicRoute from './publicroute';
import PrivateRoute from './privateroute';
const routes = [
  {
    path: '/',
    element: (
      <PublicRoute>
        <OnBoardingLayout>
          <Splash />
        </OnBoardingLayout>
      </PublicRoute>
    ),
  },
  {
    path: '/add-wallet',
    element: (
      <OnBoardingLayout>
        <AddWallet />
      </OnBoardingLayout>
    ),
  },
  {
    path: '/recover-wallet',
    element: (
      <PublicRoute>
        <OnBoardingLayout>
        <RecoverWallet />
      </OnBoardingLayout>
      </PublicRoute>
    ),
  },
  {
    path: '/recover-secret-phrase',
    element: (
      <PublicRoute>
        <OnBoardingLayout>
          <RecoverByPhrase />
        </OnBoardingLayout>
      </PublicRoute>
    ),
  },
  // {
  //   path: '/wallet-board',
  //   element: (
  //     <PrivateRoute>
  //       <Dashboard />
  //     </PrivateRoute>
  //   ),
  // },
  // {
  //   path: '/receive-sol',
  //   element: (
  //     <ReceiveSol />
  //   ),
  // },
  // {
  //   path: '/summary',
  //   element: (
  //     <Summary />
  //   ),
  // },
  {
    path: '/create-wallet',
    element: (
      <PublicRoute>
        <OnBoardingLayout>
        <CreateWallet />
      </OnBoardingLayout>
      </PublicRoute>
    ),
  },
  // {
  //   path: '/secret-key',
  //   element: (
  //     <OnBoardingLayout>
  //       <SecretKey />
  //     </OnBoardingLayout>
  //   ),
  // },
  {
    path: '/wallet-board',
    element: (
      <PrivateRoute>
        <WalletBoard />
      </PrivateRoute>
    ),
  },
  {
    path: '/send',
    element: (
      <PrivateRoute>
        <Send />
      </PrivateRoute>
    ),
  },
];

export default routes;
