import React from 'react';
import { Header } from './header';

const AddWallet: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="flex flex-col w-full h-full px-6 py-4 text-white">
        <Header/>
        
        {/* Wallet illustration - centered precisely */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative w-48 h-36">
            {/* Pink wallet */}
            <div className="absolute bottom-0 h-20 transform -translate-x-1/2 left-1/2 w-28">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="100%" height="100%">
                <rect x="5" y="10" width="90" height="60" rx="6" fill="#ff8fa3" />
                <rect x="5" y="10" width="90" height="15" rx="6" fill="#ff7a93" />
                <circle cx="85" cy="40" r="6" fill="#ffffff" />
              </svg>
            </div>
            
            {/* Coins - staggered and overlapping as in the image */}
            <div className="absolute transform -translate-x-1/2 bottom-14 left-1/2 -rotate-12">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-600 border-2 border-gray-500 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-gray-300">Ξ</span>
              </div>
            </div>
            <div className="absolute transform translate-x-6 -translate-x-1/2 bottom-18 left-1/2 rotate-12">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500 border-2 border-orange-400 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-white">₿</span>
              </div>
            </div>
            <div className="absolute transform -translate-x-6 -translate-x-1/2 bottom-22 left-1/2 rotate-6">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 border-2 border-purple-500 rounded-full shadow-lg">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features list - tighter spacing to match image */}
        <div className="mb-8 space-y-5">
          {/* Feature 1 */}
          <div className="flex items-start">
            <div className="p-2 mr-3 bg-black rounded-lg bg-opacity-40">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold">Your Keys, Your Crypto</h3>
              <p className="mt-1 text-xs text-gray-300">Create a new wallet or import an existing one—your assets, fully in your control.</p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex items-start">
            <div className="p-2 mr-3 bg-black rounded-lg bg-opacity-40">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold">Start Smart, Stay Secure</h3>
              <p className="mt-1 text-xs text-gray-300">Set up your wallet in seconds and experience AI-powered portfolio management.</p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex items-start">
            <div className="p-2 mr-3 bg-black rounded-lg bg-opacity-40">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="3" rx="1" stroke="white" strokeWidth="2"/>
                <rect x="3" y="11" width="18" height="3" rx="1" stroke="white" strokeWidth="2"/>
                <rect x="3" y="17" width="18" height="3" rx="1" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold">Seamless Access to the Solana Ecosystem</h3>
              <p className="mt-1 text-xs text-gray-300">Securely add or create a wallet and unlock powerful trading tools.</p>
            </div>
          </div>
        </div>
        
        {/* Action buttons - matching the image button proportions */}
        <div className="mt-auto mb-4 space-y-3">
          <button className="w-full py-3 font-medium text-white bg-blue-600 rounded-xl">
            Create new wallet
          </button>
          <button className="w-full py-3 font-medium text-white bg-transparent border border-gray-700 rounded-xl">
            I already have a wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWallet;