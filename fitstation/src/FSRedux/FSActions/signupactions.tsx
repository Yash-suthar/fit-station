import {Dispatch} from 'redux';
import {BIRTHDATE, EMAIL, NAME, PASSWORD} from '../types';

export type signupType = {
  type: string;
  payload: any;
};

export const signUpName = (value: any) => {
  return async (dispatch: Dispatch<signupType>) => {
    dispatch({
      type: NAME,
      payload: value,
    });
  };
};
export const signUpEmail = (value: any) => {
  return async (dispatch: Dispatch<signupType>) => {
    dispatch({
      type: EMAIL,
      payload: value,
    });
  };
};
export const signUpPassword = (value: any) => {
  return async (dispatch: Dispatch<signupType>) => {
    dispatch({
      type: PASSWORD,
      payload: value,
    });
  };
};
export const SignUpBirthDate = (value: any) => {
  return async (dispatch: Dispatch<signupType>) => {
    dispatch({
      type: BIRTHDATE,
      payload: value,
    });
  };
};
