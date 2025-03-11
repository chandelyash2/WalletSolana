import React from 'react';
import { AddWalletIcon, SplashImg } from '../../assets';
import { PrimaryButton, NavigationBarTitle } from '../index';
import { useNavigate } from 'react-router-dom';
import { PUBLIC_ROUTES, RECOVER_WALLET_OPTIONS } from '../../constants/index';

const RecoverWallet: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center w-full max-w-[375px] h-screen min-h-[600px] max-h-[600px] bg-no-repeat bg-cover bg-center rounded-xl"
      style={{ backgroundImage: `url(${SplashImg})` }}
    >
      <div
        className="w-[90%] min-h-[600px] flex flex-col gap-5"
        style={{ marginBottom: '10px' }}
      >
        <NavigationBarTitle
          title="Your Keys, Your Crypto"
          callback={() => navigate(PUBLIC_ROUTES.ADD_WALLET)}
        />
        <div className="relative flex justify-center">
          <img src={AddWalletIcon} alt="" />
        </div>
        <div className="flex flex-col w-full gap-4">
          {RECOVER_WALLET_OPTIONS.map((option) => (
            <div key={option.id} className="flex flex-row items-start gap-2">
              <div className="flex items-center justify-center w-8 h-8 p-4 bg-[#D9D9D9] rounded-full">
                <img src={option.icon} alt="" />
              </div>
              <div className="">
                <h3 className="text-[16px] font-medium text-white">
                  {option.title}
                </h3>
                {option.description && (
                  <p className="text-[12px] text-white font-[100]">
                    {option.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <PrimaryButton
          title={'Confirm'}
          onClick={() => navigate('/create-password')}
        />
      </div>
    </div>
  );
};

export default RecoverWallet;
