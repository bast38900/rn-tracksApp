/*
    Map component to show maps
*/

import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

// Import maps and tracks to the screen
import MapView, { Polyline, Circle } from "react-native-maps";

//Import context to access data from server
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  initialLocation = {
    latitude: 55.39594,
    longitude: 10.38831,
  };

  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 300,
  },
});

export default Map;
