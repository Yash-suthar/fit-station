import { SHOW_LOADER } from '../types';
import { commonType } from '../FSActions/commonactions';

interface CommonState {
  isLoading: boolean;
  message: string;
}

const initialState = {
  isLoading: false,
  message: '',
};

const commonReducer = (
  state: CommonState = initialState,
  action: commonType,
) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: action.payload, message: null };

    default:
      return state;
  }
};

export default commonReducer;
