import {SET_USER_NAME, SET_USER_LASTNAME} from "../types/userTypes"

const initialState = {
  name: "",
  lastName: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.payload };
    case SET_USER_LASTNAME:
      return { ...state, lastName: action.payload };
    default:
      return state;
  }
};

export default userReducer;
