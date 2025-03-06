import React, { useEffect, useState } from 'react';
import Splash from './components/splash/splash';
import AddWallet from './components/add-wallet/addwallet';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) return <Splash />;

  return <AddWallet />;
};

export default App;
