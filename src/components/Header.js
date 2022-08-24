import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalField } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            Email:
            { email }
          </p>
          <h4 data-testid="total-field">
            { totalField ? totalField.toFixed(2) : 0 }
          </h4>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  totalField: state.wallet.totalField,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
  totalField: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
