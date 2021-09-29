import React from 'react';
import './style.css';
import Header from './components/header';
import Summary from './components/summary';
import { AppProvider } from './context/globalState';

export default function App() {
  return (
    <AppProvider>
      <Header />
      <div className="container">
        <Summary />
      </div>
    </AppProvider>
  );
}
