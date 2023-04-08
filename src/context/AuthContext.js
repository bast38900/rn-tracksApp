import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

// Adding Reducer to change state
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

// Fucntion to add data to the sever, and change state
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
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
  { isSignedIn: false, errorMessage: "" }
);
