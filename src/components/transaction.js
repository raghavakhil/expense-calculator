import React, { useContext } from 'react';
import AddTransaction from './addtransaction';
import { AppContext } from '../context/globalState';

const Transaction = () => {
  const { transactions, deleteTrans } = useContext(AppContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          const sign = transaction.amount < 0 ? '-' : '+';
          return (
            <>
              <li
                className={transaction.amount < 0 ? 'minus' : 'plus'}
                key={transaction.id}
              >
                {transaction.text}{' '}
                <span>
                  {sign}${Math.abs(transaction.amount)}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTrans(transaction.id)}
                >
                  x
                </button>
              </li>
            </>
          );
        })}
      </ul>
      <AddTransaction />
    </>
  );
};

export default Transaction;
