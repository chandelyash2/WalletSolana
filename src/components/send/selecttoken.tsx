import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SOL, SplashImg } from '../../assets/index';
import useTokenBalance from '../../hooks/usetokensandbalances';

interface SelectTokenProps {
  active: number;
  setActive: Function;
}
const SelectToken: React.FC<SelectTokenProps> = ({ active, setActive }) => {
  const { setAddress, tokens } = useTokenBalance();
  console.log(tokens);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  console.log(active, setActive);

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
    <div
      className="min-h-screen text-white"
       style={{ backgroundImage: `url(${SplashImg})` ,padding: '1rem'}}
    >
      {/* Header */}
      <div className="flex items-center" style={{ marginBottom: '1.5rem' }}>
        <button style={{ marginRight: '1rem' }} onClick={()=> navigate(-1)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </button>
        <h1
          className="flex-1 text-xl font-medium text-center"
          style={{ marginRight: '1.5rem' }}
        >
          Select token
        </h1>
      </div>

      {/* Search Bar */}
      <div className="relative" style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search"
          className="w-full text-gray-100 bg-[#383B47] rounded-xl focus:outline-none"
          style={{
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute transform -translate-y-1/2 right-4 top-1/2">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Token List */}
      <div className="space-y-3">
        {tokens.map((token: any) => (
          <div
            key={token?.symbol}
            className="flex items-center cursor-pointer bg-[#383B47] rounded-xl"
            style={{ padding: '1rem', marginTop: '10px' }}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold`}
              style={{ marginRight: '0.75rem' }}
            >
              <img src={SOL} alt="" />
            </div>
            <div className="flex-1">
              <div className="font-medium">{token.name}</div>
              <div className="text-sm text-gray-400">{token?.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectToken;
