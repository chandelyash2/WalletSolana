import {
  keyIcon,
  lockIcon,
  solanaIcon,
  KeySmall,
  EditSmall,
  EyeSmall,
  CloudSmall,
} from '../assets';

const ADD_WALLET_FEATURES = [
  {
    id: 1,
    img: keyIcon,
    heading: 'Your Keys, Your Crypto',
    description:
      'Create a new wallet or import an existing one—your assets, fully in your control.',
  },
  {
    id: 2,
    img: lockIcon,
    heading: 'Start Smart, Stay Secure',
    description:
      'Set up your wallet in seconds and experience AI-powered portfolio management.',
  },
  {
    id: 3,
    img: solanaIcon,
    heading: 'Seamless Access to the Solana Ecosystem',
    description:
      'Securely add or create a wallet and unlock powerful trading tools.',
  },
];

const RECOVER_WALLET_OPTIONS = [
  {
    id: 1,
    icon: EditSmall,
    title: 'Import Secret Recovery Key Phrase',
    description: 'Use a 12 word seed phrase',
  },
  {
    id: 2,
    icon: KeySmall,
    title: 'By Private Key',
    description: '',
  },
  {
    id: 3,
    icon: CloudSmall,
    title: 'iCloud or Google Backup',
    description: 'Restore wallet from iCloud or Google',
  },
  {
    id: 4,
    icon: EyeSmall,
    title: 'Watch Wallet',
    description: 'Observe or track assets of other SOL wallet',
  },
];

const PUBLIC_ROUTES = {
  ADD_WALLET: '/add-wallet',
  RECOVER_WALLET: '/recover-wallet',
  CREATE_WALLET: '/create-wallet',
  WALLET_ONBOARD: '/wallet-board',
};

export { ADD_WALLET_FEATURES, RECOVER_WALLET_OPTIONS, PUBLIC_ROUTES };
