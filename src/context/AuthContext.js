/*  
    Authentication context whith CRUD functions.
*/
// Importing navigation function
import { navigate } from "../navigationRef";

//Adding local storage to store token on device
import AsyncStorage from "@react-native-async-storage/async-storage";

// Importing context creation
import createDataContext from "./createDataContext";

//importing api connection
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
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

// Function to check for a token in async storage
const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
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
        payload: "Something went wrong with sign up!",
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
        payload: "Username or password is incorrect!",
      });
    }
  };

// Function to logout from the sever, and change state
const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

// Exporting createDataContext function.
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
