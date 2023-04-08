import createDataContext from "./createDataContext";

// Adding Reducer to change state
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Fucntion to add data to the sever, and change state
const signup = (dispatch) => {
  return ({ email, password }) => {};
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
  { isSignedIn: false }
);
