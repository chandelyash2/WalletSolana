import {
  Splash,
  AddWallet,
  RecoverWallet,
  CreateWallet,
  WalletBoard,
} from './components/index';
import OnBoardingLayout from './components/onboarding-layout';

const routes = [
  {
    path: '/',
    element: (
      <OnBoardingLayout>
        <Splash />
      </OnBoardingLayout>
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
      <OnBoardingLayout>
        <RecoverWallet />
      </OnBoardingLayout>
    ),
  },
  {
    path: '/create-wallet',
    element: (
      <OnBoardingLayout>
        <CreateWallet />
      </OnBoardingLayout>
    ),
  },
  {
    path: '/wallet-board',
    element: <WalletBoard />,
  },
];

export default routes;
