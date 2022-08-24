import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchThunkExpenses, fetchThunkCurrencies } from '../actions';

class AddExpenses extends Component {
  constructor(props) {
    super(props);
    this.paymentsMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    this.expensesTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchThunkCurrencies());
  }

handleChange = ({ target }) => {
  const { name, value } = target;
  this.setState({ [name]: value });
}

handleSubmit = () => {
  const { dispatch } = this.props;
  const { value, description, currency, method, tag } = this.state;
  dispatch(fetchThunkExpenses({ value, description, currency, method, tag }));
  this.setState({ value: 0 });
}

render() {
  const { currencies } = this.props;
  const { value, method, tag, description, currency } = this.state;
  return (
    <div>
      <form>
        <label htmlFor="value-input">
          Valor
          <input
            data-testid="value-input"
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Despesa:
          <input
            data-testid="description-input"
            id="description"
            name="description"
            type="text"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select
            data-testid="currency-input"
            id="coin"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencies.map((coin) => (
              <option
                key={ coin }
                value={ coin }
              >
                { coin }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento:
          <select
            data-testid="method-input"
            id="payment"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            {this.paymentsMethods.map((payment) => (
              <option
                key={ payment }
                value={ payment }
              >
                { payment }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            {this.expensesTags.map((type) => (
              <option
                key={ type }
                value={ type }
              >
                { type }
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Adicionar despesa
        </button>
      </form>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

AddExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, null)(AddExpenses);
