import { Dispatch } from "redux";
import { SHOW_LOADER } from "../types";


export type commonType = {
    type: string,
    payload: boolean
}


export const updateLoader = (value: boolean) => {
    return async (dispatch: Dispatch<commonType>) => {
        dispatch({
            type: SHOW_LOADER,
            payload: value
        });
    }
}



