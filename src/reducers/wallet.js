import {
  CURRENCIES_USED,
  SAVE_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalField: 0,
};

function updateTotal(totalField, expense) {
  const ask = parseFloat(expense.exchangeRates[expense.currency].ask);
  return totalField + (expense.value * ask);
}

function reducerWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES_USED:
    return { ...state, currencies: action.currencies };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length, ...action.expenses },
      ],
      totalField: updateTotal(state.totalField, action.expenses),
    };
  default:
    return state;
  }
}

export default reducerWallet;
