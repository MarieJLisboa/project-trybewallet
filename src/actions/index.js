// src/user
export const FORM_LOGIN = 'FORM_LOGIN';
export const formLogin = (email) => ({ type: FORM_LOGIN, email });

// src/wallet
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const saveExpenses = ({
  value, description, currency, method, tag, exchangeRates,
}) => ({
  type: SAVE_EXPENSES,
  expenses: { value, description, currency, method, tag, exchangeRates },
});

const url = 'https://economia.awesomeapi.com.br/json/all';

export function fetchThunkExpenses({ value, description, currency, method, tag }) {
  return (dispatch) => fetch(url)
    .then((response) => response.json())
    .then((data) => dispatch(saveExpenses(
      { value, description, currency, method, tag, exchangeRates: data },
    )))
    .catch((error) => console.log(error));
}

export const CURRENCIES_USED = 'CURRENCIES_USED';
export const currenciesUsed = (currencies) => ({ type: CURRENCIES_USED, currencies });

export function fetchThunkCurrencies() {
  return (dispatch) => fetch(url)
    .then((response) => response.json())
    .then((data) => dispatch(currenciesUsed(
      Object.keys(data).filter((coin) => coin !== 'USDT'),
    )))
    .catch((error) => console.log(error));
}
