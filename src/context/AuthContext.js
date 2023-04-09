/*  
    Authentication context whith CRUD functions.
*/
// Importing navigation function
import { navigate } from "../navigationRef";

//Adding local storage to store token on device
import AsyncStorage from "@react-native-async-storage/async-storage";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

// Adding Reducer to change state
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

// Function to clear the error message, between the screens
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

// Http POST request for signup, store the token, and redirect
const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

// Http POST request for signin, store the token, and redirect
const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      navigate("TrackList");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Username or password is incorrect",
      });
    }
  };

// Function to get data from the sever, and change state
const signout = (dispatch) => {
  return ({ email, password }) => {};
};

// Exporting createDataContext function.
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage },
  { token: null, errorMessage: "" }
);
