import React, { useState, useContext } from 'react';
import { AppContext } from '../context/globalState';

const AddTransaction = () => {
  const { addTrans } = useContext(AppContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrans = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };

    addTrans(newTrans);
  };
  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense,positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
