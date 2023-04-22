import { SIGNIN } from '../types';
import { signinType } from '../FSActions/signinaction';

interface CommonState {
    isLogin: boolean;
}

const initialState = {
    isLogin: false
};

const signinReducer = (
    state: CommonState = initialState,
    action: signinType,
) => {
    switch (action.type) {
        case SIGNIN:
            return { ...state, isLogin: action.payload };

        default:
            return state;
    }
};

export default signinReducer;
