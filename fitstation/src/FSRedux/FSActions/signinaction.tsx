import { Dispatch } from "redux";
import { SIGNIN } from "../types";


export type signinType = {
    type: string,
    payload: boolean
}


export const updateLoginStatus = (value: boolean) => {
    return async (dispatch: Dispatch<signinType>) => {
        dispatch({
            type: SIGNIN,
            payload: value
        });
    }
}



