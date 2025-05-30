import { DARK_MODE } from "../types";

const initialState = {
  isdarkMode: localStorage.getItem("darkmode") !== null 
    ? JSON.parse(localStorage.getItem("darkmode")) 
    : true, // Default to dark mode
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        isdarkMode: action.payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;