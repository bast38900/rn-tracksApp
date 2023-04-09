import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Import maps to the screen
import MapView from "react-native-maps";

const Map = () => {
  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        latitude: 55.39594,
        longitude: 10.38831,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
    />
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 300,
  },
});

export default Map;
