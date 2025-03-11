import { useState } from 'react';
import { BgSecureWallet } from '../../assets';
import { PrimaryButton, NavigationBarTitle } from '../index';
import MnemonicsInputBox from './mnemonicsinputbox';
import Stepper from './stepper';
import { useAppContext } from '../../context/useappcontext';
// import { useNavigate } from 'react-router-dom';
// import { PUBLIC_ROUTES } from '../../constants';

const recoveryWords = [
  'cup',
  'admit',
  '',
  'debris',
  'look',
  'kiwi',
  'blog',
  '',
  'syrub',
  'many',
  '',
  'initiate',
];

interface StepType {
  id: number;
  value: number;
  Component: React.FC<{
    steps: StepType[];
    active: number;
    done: number[];
    setDone: Function;
    setActive: Function;
  }>;
}

interface ConfirmPhraseProps {
  steps: StepType[];
  active: number;
  done: Array<number>;
  setDone: Function;
  setActive: Function;
}

const ComfirmPhrase: React.FC<ConfirmPhraseProps> = ({
  steps,
  active,
  done,
  setDone,
  setActive,
}) => {
  const { password } = useAppContext();

  console.log("???????????????????????????==========================",password);

  const [mnemonics] = useState(recoveryWords);
  // const navigate = useNavigate();
  console.log(steps, active, done, setDone, setActive);


  const closeTab = () => {
    alert('Please pin your extension and open your dashboard')
    console.log('I AM RUNNING');
    setTimeout(() => {
      chrome.tabs.getCurrent(function (tab: any) {
        chrome.tabs.remove(tab?.id);
      });
    }, 1000);
  };

  return (
    <div
    className="flex flex-col items-center justify-center w-[100%] min-w-[375px] max-w-[375px] h-screen max-h-[660px] bg-no-repeat bg-cover bg-center rounded-xl"
    style={{ backgroundImage: `url(${BgSecureWallet})` }}
    >
      <div className="w-[90%] flex flex-col gap-6">
        <NavigationBarTitle
          title="Add a wallet"
          callback={() => {
            setActive(1);
          }}
        />
        <Stepper steps={steps} active={active} done={done} />
        <div className="text-center">
          <h2 className="text-[20px] font-[400] text-white">
           Confirm Recovery Phrase
          </h2>
          <p className="px-4 mt-2 text-[14px] text-white">
            Confirm Secret Recovery Phrase
          </p>
        </div>
        <MnemonicsInputBox mnemonics={mnemonics} />

        <PrimaryButton
          onClick={() => closeTab()}
          title={'Proceed'}
          isDisabled={mnemonics.length !== 12}
        />
      </div>
    </div>
  );
};

export default ComfirmPhrase;
