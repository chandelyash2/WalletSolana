import React, { useState } from 'react';
import { EyeFilled, CopySmall, EyeSlash } from '../../assets';
import { useAppContext } from '../../context/useappcontext';

interface MnemonicsBoxProps {
  isBlur: boolean;
  setBlur?: Function;
}

const MnemonicsBox: React.FC<MnemonicsBoxProps> = ({ isBlur, setBlur }) => {
  const { secretphrase, mnemonicsArr } = useAppContext();

  console.log(secretphrase,'mnemonics:',mnemonicsArr,'mnemonics array ')

  const [copytext, setCopyText] = useState('Copy To Clipboard');

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(secretphrase);
    setCopyText('Copied!');
    setTimeout(() => {
      setCopyText('Copy To Clipboard');
    }, 5000);
  };
  return (
    <div
      className={`relative flex flex-col items-center justify-center w-[90%] h-[351px] max-w-md ${
        isBlur ? 'bg-white/5 backdrop-blur-md' : 'bg-white/5'
      } rounded-xl`}
      style={{ marginInline: 'auto' }}
    >
      {isBlur && (
        <div className="flex flex-col items-center justify-center">
          <img src={EyeFilled} alt="" className="" />
          <p className="mt-4 text-sm text-white">Make sure nobody is looking</p>
        </div>
      )}
      {!isBlur && (
        <div>
          <div className="grid grid-cols-2 p-6 gap-x-6 gap-y-6">
            {/* {mnemonicsArr?.map((word, index) => (
              <div className="flex items-start gap-2 w-[50%]">
                <span className="text-white">{index + 1}.</span>
                <input
                  type="text"
                  value={word}
                  readOnly
                  className="text-center text-white bg-transparent border border-white rounded-sm w-[85px] h-[21px]"
                />
              </div>
            ))} */}
          </div>
          <div
            className="flex items-center justify-between mt-4 text-white"
            style={{ marginTop: '30px' }}
          >
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => (setBlur ? setBlur(!isBlur) : () => {})}
            >
              <img src={EyeSlash} alt="" className="" />
              <span>Hide seek phrase</span>
            </button>
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                copyToClipBoard();
              }}
            >
              <img src={CopySmall} alt="" className="" />
              <span>{copytext}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MnemonicsBox;
