import React, { useContext } from 'react';
import Transaction from './transaction';
import { AppContext } from '../context/globalState';

const Summary = () => {
  const { transactions } = useContext(AppContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <div>
        <h4>YOUR BALANCE</h4>
        <h1>${total}</h1>
        <div className="inc-exp-container">
          <div>
            <h3>Income</h3>
            <p className="money plus">{income}</p>
          </div>
          <div>
            <h3>Expense</h3>
            <p className="money minus">{expense}</p>
          </div>
        </div>
      </div>
      <Transaction />
    </>
  );
};

export default Summary;
