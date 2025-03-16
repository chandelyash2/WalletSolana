import { useState } from 'react';
import { BgSecureWallet } from '../../assets';
import { PrimaryButton, NavigationBarTitle } from '../index';
import MnemonicsInputBox from '../create-wallet/mnemonicsinputbox';
import { useAppContext } from '../../context/useappcontext';
import axios from 'axios';
import { API_URL } from '../../constants';

interface ConfirmPhraseProps {
  active: number;
  setActive: Function;
}

const RecoverWalletComfirmPhrase: React.FC<ConfirmPhraseProps> = ({
  setActive
}) => {
  const { password,setSecretPhrase,setMnemonicsArr,setPrivateKey,setWallet } =
    useAppContext();
  const [error, setError] = useState('');
  const [typedSeed, setTypedSeed] = useState("");

  const recoverWallet = async () =>{
    try {
      const response = await axios.post(API_URL.recoverWallet,{
        secretPhrase: typedSeed
      });
      console.log("Wallet recovred:", response?.data?.data);
      setSecretPhrase(response?.data?.data?.secretPhrase)
      setMnemonicsArr(response?.data?.data?.secretPhrase.split(" "))
      setPrivateKey(response?.data?.data?.privateKey)
      setWallet(response?.data?.data?.publicKey);
      setAccount(password,response?.data?.data?.privateKey,response?.data?.data?.publicKey);
    } catch (error) {
      console.error("Error recovering wallet:", error);
      return { success: false, error: "Failed to recover wallet" }; // Return error response
    }
  }

  const handleWalletRecovery = async () => {
    await recoverWallet();
  };

  function setAccount(password: string,privatekey:string,publickey:string) {
    let accountList;
    try {
      accountList = JSON.parse(localStorage.getItem(password) ?? '[]');
      const isValidAccountList =
        Array.isArray(accountList) &&
        accountList.every(
          (item) =>
            typeof item === 'object' &&
            item !== null &&
            'walletName' in item &&
            'key' in item &&
            'publicKey' in item
        );
      if (!isValidAccountList) {
        accountList = [];
      }
    } catch {
      accountList = [];
    }

    const accountExists = accountList.some(
      (account: any) => account.key === privatekey
    );
    if (!accountExists) {
      const newAccount = {
        walletName: '',
        key: privatekey,
        publicKey:publickey
      };

      accountList.push(newAccount);
      localStorage.setItem(password, JSON.stringify(accountList));
    } else {
      console.log('Account already added');
    }

    localStorage.setItem('privatekey', privatekey);
    localStorage.setItem('password', password);
    localStorage.setItem('marvel-wallet-exist', 'true');
    closeTab();
  }

  const closeTab = () => {
    alert('Please pin your extension and open your dashboard');
    setTimeout(() => {
      chrome.tabs.getCurrent(function (tab: any) {
        chrome.tabs.remove(tab?.id);
      });
    }, 1000);
  };

  const handleSecretPhraseComparison = () => {
    console.log('typedSeed.length',typedSeed.length)
    if (typedSeed.length !== 12) {
      setError('Please complete your secret phrase');
    }
    handleWalletRecovery();
    console.log('Error in confirm phrase:', error);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-[100%] min-w-[375px] max-w-[375px] h-screen max-h-[626px] bg-no-repeat bg-cover bg-center rounded-xl"
      style={{ backgroundImage: `url(${BgSecureWallet})` }}
    >
      <div className="w-[90%] flex flex-col gap-6">
        <NavigationBarTitle
          title="Recover your wallet"
          callback={() => {
            setActive(0);
          }}
        />
        <div className="text-center">
          <h2 className="text-[20px] font-[400] text-white">
            Confirm Recovery Phrase
          </h2>
          <p className="px-4 mt-2 text-[14px] text-white">
            Confirm Secret Recovery Phrase
          </p>
        </div>
        <MnemonicsInputBox
          mnemonics={typedSeed}
          setMnemonics={setTypedSeed}
        />

        <PrimaryButton
          onClick={() => handleSecretPhraseComparison()}
          title={'Proceed'}
        />
      </div>
    </div>
  );
};

export default RecoverWalletComfirmPhrase;
