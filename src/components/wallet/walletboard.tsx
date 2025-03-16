import { useEffect } from 'react';
import BalanceBoard from './balanceboard';
import ActionsMenu from './actions';
import useTokenBalance from '../../hooks/usetokensandbalances';
import Assets from './assets';
import DashboardLayout from "../dashboardLayout/index";

const WalletBoard: React.FC = () => {
  const { usdbal,setAddress,tokens } = useTokenBalance();

  useEffect(() => {
    console.log('wallet dashboard render');
    setWalletInLocal();
  }, []);

  const setWalletInLocal = async () => {
    let password: any = localStorage.getItem('password');
    console.log('pass', password);
    let accounts: any = localStorage.getItem(password);
    console.log(accounts);
    let defaults: any = JSON.parse(accounts);
    console.log(defaults[0]);
    setAddress(defaults[0]?.publicKey);
  };

  return (
    <DashboardLayout showSearchCoin={true} showFooter={true} title="">
        <BalanceBoard usdBalance={usdbal} />
        <ActionsMenu />
        <Assets tokens={tokens} />
      </DashboardLayout>
  );

};

export default WalletBoard;