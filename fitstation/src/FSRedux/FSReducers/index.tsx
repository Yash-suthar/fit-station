import { combineReducers } from 'redux';
import commonReducer from './commonreducer';
import signinReducer from './signinreducer';
import signupReducer from './signupreducer';



export default combineReducers({
  commonReducer: commonReducer,
  signinReducer: signinReducer,
  signupReducer:signupReducer,
});
