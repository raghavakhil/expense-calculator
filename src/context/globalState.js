import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTrans = (id) => {
    dispatch({ type: 'DELETE_TRANS', payload: id });
  };

  const addTrans = (transaction) => {
    dispatch({ type: 'ADD_TRANS', payload: transaction });
  };

  return (
    <AppContext.Provider
      value={{ transactions: state.transactions, deleteTrans, addTrans }}
    >
      {children}
    </AppContext.Provider>
  );
};
