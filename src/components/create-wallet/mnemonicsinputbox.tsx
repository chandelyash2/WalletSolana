import React from 'react';

interface MnemonicsInputBoxProps {
  mnemonics?: string[];
}

const MnemonicsInputBox: React.FC<MnemonicsInputBoxProps> = ({
  mnemonics = []
}) => {
  console.log(mnemonics);
  return (
    <div
      className={`relative flex flex-col items-center justify-center w-[90%] h-[351px] max-w-md bg-white/5 rounded-xl`}
      style={{marginInline:"auto"}}
    >
          <div className="grid grid-cols-2 p-6 gap-x-6 gap-y-6">
            {mnemonics?.map((word, index) => (
              <div className="flex items-start gap-2 w-[50%]">
                <span className="text-white">{index + 1}.</span>
                <input
                  type="text"
                  value={word}
                  readOnly
                  className="text-center text-white bg-transparent border border-white rounded-sm w-[85px] h-[21px]"
                />
              </div>
            ))}
        </div>
    </div>
  );
};

export default MnemonicsInputBox;
