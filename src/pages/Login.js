import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { formLogin } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

handleChange = ({ target }) => {
  const { name, value } = target;
  this.setState({ [name]: value });
}

// [1] regex
validate = () => {
  const { email, password } = this.state;
  const regex = /\S+@\S+\.\S+/;
  const minCharacter = 6;
  const validation = regex.test(email) && password.length >= minCharacter;
  if (validation) {
    return false;
  }
  return true;
}

render() {
  const { email, password } = this.state;
  const { submitEmail } = this.props;
  return (
    <div>
      <form>
        <label htmlFor="emailInput">
          Email:
          <input
            data-testid="email-input"
            type="email"
            value={ email }
            name="email"
            placeholder="Digite o seu email"
            id="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="passwordInput">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            value={ password }
            name="password"
            id="passwordInput"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.validate() }
            onClick={ () => submitEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    </div>);
}
}

const mapDispatchToProps = (dispatch) => ({
  submitEmail: (email) => dispatch(formLogin(email)),
});

Login.propTypes = {
  submitEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);

// [1]Regex: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
