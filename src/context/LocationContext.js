/*  
    Location context to create a hook
*/

// Importing context creation
import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

// Action function to start recording location changes
const startRecording = (dispatch) => () => {};

// Action function to stop recording location changes
const stopRecording = (dispatch) => () => {};

// Action Function to add location when location updates
const addLocation = (dispatch) => (location) => {
  dispatch({ type: "add_current_location", payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
