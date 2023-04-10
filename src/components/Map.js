import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Import maps and tracks to the screen
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 55.39594 + i * 0.001,
      longitude: 10.38831 + i * 0.001,
    });
  }

  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        latitude: 55.39594,
        longitude: 10.38831,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 300,
  },
});

export default Map;
