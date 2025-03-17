import DashboardLayout from '../dashboardLayout/index';
import solIcon from '../../assets/icons/summaysol.svg';
import { sendSolanaTransactionAndConfirm } from '../../helpers';
import { getPrivateKeyLocalStorage } from '../../helpers/common/localstorage';
import { DotFormatAddress } from '../../helpers/common/dotformataddress';

interface TokenSummaryProps {
  active: number;
  setActive: Function;
  setToken: Function;
  token: any;
  amount: string;
  setAmount: Function;
  usdamount: string;
  setUsdAmount: Function;
  setReceiverAddress: Function;
  receiveraddress: string;
  success: boolean;
  setSuccess: Function;
  error: string;
  setError: Function;
}

const TokenSummary: React.FC<TokenSummaryProps> = ({
  token,
  usdamount,
  receiveraddress,
  amount,
  setError,
  setSuccess,
  setActive,
}) => {
  const data = [
    {
      label: 'Asset',
      value: token.name,
      subText: 'text-white opacity-60 font-normal',
    },
    {
      label: 'From',
      value: DotFormatAddress(token.associatedTokenAddress),
      subText: 'text-end',
    },
    {
      label: 'To',
      value: DotFormatAddress(receiveraddress),
      subText: 'text-end',
    },
    {
      label: 'Network fee',
      value: '0.000005 SOL',
      subText: 'text-end',
    },
    {
      label: 'Max Total',
      value: `$${Number(usdamount)}`,
      subText: 'text-end',
    },
  ];

  const sendTransaction = async () => {
    try {
      console.log(token, receiveraddress, usdamount, amount);
      const privateKeyArr = getPrivateKeyLocalStorage();
      const result = await sendSolanaTransactionAndConfirm(
        privateKeyArr,
        receiveraddress,
        Number(amount)
      );
      console.log('result', result);
      if (result) {
        setActive(4);
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
      setError(`Failed to send ${amount} ${token.symbol}`);
    }
  };

  return (
    <div className="abc">
      <DashboardLayout
        title="Summary"
        showButton={true}
        btntitle="Next"
        onClick={() => sendTransaction()}
      >
        <div
          className="flex flex-col items-center justify-center"
          style={{ padding: '52px 0 13px 0' }}
        >
          <img src={solIcon} alt="imgs" className="w-[73px] h-[73px]" />
          <h2
            className="text-[48px] font-extrabold text-[#fff]"
            style={{ paddingTop: '10px' }}
          >
            {Number(amount)} SOL
          </h2>
          <p className="text-[15px] font-normal text-[#fff]">
            ~${Number(usdamount)}
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          {data.map((item) => (
            <p
              key={item.label}
              className="flex justify-between text-[12px] text-[#fff] w-full"
            >
              <span
                className={`${item.subText} text-[12px] text-white opacity-60 font-normal`}
              >
                {item.label}
              </span>
              {item.value}
            </p>
          ))}
        </div>
      </DashboardLayout>
    </div>
  );
};

export default TokenSummary;
