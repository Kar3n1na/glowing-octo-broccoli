import { SET_USER_NAME, SET_USER_LASTNAME} from "../types/userTypes"
export const setUserName = (name) => {
  return {
    type: SET_USER_NAME,
    payload: name,
  };
};

export const setUserLastName = (lastName) => {
  return {
    type: SET_USER_LASTNAME,
    payload: lastName,
  };
};
