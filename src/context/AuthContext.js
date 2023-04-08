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
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

// Fucntion to add data to the sever, and change state
const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });

      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

// Function to get data from the sever, and change state
const signin = (dispatch) => {
  return ({ email, password }) => {};
};

// Function to get data from the sever, and change state
const signout = (dispatch) => {
  return ({ email, password }) => {};
};

// Exporting createDataContext function.
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
