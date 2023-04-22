import {BIRTHDATE, EMAIL, NAME, PASSWORD} from '../types';
import {signupType} from '../FSActions/signupactions';

interface signupState {
  name: {
    FirstName: string;
    LastName: string;
    UserName: string;
  };
  email: string;
  password: string;
  birthDate: string;
}

const initialState = {
  name: {
    FirstName: '',
    LastName: '',
    UserName: '',
  },
  email: '',
  password: '',
  birthDate: '',
};

const signupReducer = (
  state: signupState = initialState,
  action: signupType,
) => {
  switch (action.type) {
    case NAME:
      return {...state, name: action.payload};
    case EMAIL:
      return {...state, email: action.payload};
    case PASSWORD:
      return {...state, password: action.payload};
    case BIRTHDATE:
      return {...state, birthDate: action.payload};

    default:
      return state;
  }
};

export default signupReducer;
