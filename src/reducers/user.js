import { FORM_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FORM_LOGIN:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default reducerUser;
