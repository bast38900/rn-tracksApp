/*
    File to fake location in expo app
*/

import * as Location from "expo-location";

// Function to set the size parameter
const tenMetersWithDegrees = 0.0001;

// Function to set the "fake" location
const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 55.39594 + increment * tenMetersWithDegrees,
      longitude: 10.38831 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
