/*  
    Track context to save tracks
*/

// Importing context creation
import createDataContext from "./createDataContext";

//importing api connection
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Action function to get all track
const fetchTracks = (dispatch) => () => {};

// Action function to create a track
const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

// Action function to delete a track
const deleteTrack = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
