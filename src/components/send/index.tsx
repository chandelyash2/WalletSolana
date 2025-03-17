import EnterAddress from "./enteraddress";
import EnterAmount from "./enteramount";
import SelectToken from "./selecttoken";
import { useEffect, useState } from "react";
import TokenSummary from "./tokensummary";
import TransactionSuccess from "./transactionsuccess";

interface StepType {
  id: number;
  value: number;
  Component: React.FC<{
    active: number;
    setActive: Function;
    setToken:Function;
    token:any;
    amount:string;
    setAmount:Function;
    usdamount:string;
    setUsdAmount:Function;
    setReceiverAddress:Function;
    receiveraddress:string;
    success:boolean;
    setSuccess:Function;
    error:string;
    setError:Function;
  }>;
}

const SendProps: StepType[] = [
  {
    id: 0,
    value: 1,
    Component: SelectToken,
  },
  {
    id: 1,
    value: 2,
    Component: EnterAddress,
  },
  {
    id: 2,
    value: 3,
    Component: EnterAmount,
  },
  {
    id: 3,
    value: 4,
    Component: TokenSummary,
  },
  {
    id: 4,
    value: 5,
    Component: TransactionSuccess,
  }
];

const Send: React.FC = () => {
  const [steps] = useState<StepType[]>(SendProps);
  const [active, setActive] = useState(0);
  const [selectedToken, setSelectedToken] = useState(null);
  const [amount, setAmount] = useState('');
  const [usdamount, setUsdAmount] = useState('');
  const [receiveraddress, setReceiverAddress] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(()=>{
    setActive(0);
    setSelectedToken(null);
    setAmount('');
    setUsdAmount('');
    setReceiverAddress('');
    setSuccess(false);
    setError('');
     return(()=>{
      console.log('component unmounted');
      setActive(0);
      setSelectedToken(null);
      setAmount('');
      setUsdAmount('');
      setReceiverAddress('');
      setSuccess(false);
      setError('');
     })
  },[])

  return (
    <div>
      {steps.map((step) => {
        const { Component, id } = step;
        return (
          <>
            {active === id && (
              <Component
                active={active}
                setActive={setActive}
                setToken={setSelectedToken}
                token={selectedToken}
                amount={amount}
                setAmount={setAmount}
                usdamount={usdamount}
                setUsdAmount={setUsdAmount}
                setReceiverAddress={setReceiverAddress}
                receiveraddress={receiveraddress}
                success={success}
                setSuccess={setSuccess}
                error={error}
                setError={setError}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Send;


