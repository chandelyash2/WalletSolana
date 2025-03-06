// src/App.tsx
import React from 'react';
import Splash from './components/splash';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <Splash />
    </div>
  );
};

export default App;
