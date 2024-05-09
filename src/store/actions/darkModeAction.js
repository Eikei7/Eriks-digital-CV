import { DARK_MODE } from "../types";

export const handledarkMode = (e) => async (dispatch) => {
  // Getting the true or false value from the parameter and saving that to localstorage
  localStorage.setItem("darkmode", e);

  // Dispatch data to reducer to be accessed as payload.action
  dispatch({
    type: DARK_MODE,
    payload: e,
  });
};