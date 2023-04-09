/*
    Screen for creating a new track
*/
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

// Import this hook, to pplave heading under the edge of the screen
import { SafeAreaView } from "react-navigation";

// Get maps component
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView style={styles.viewStyle} forceInset={{ top: "always" }}>
      <Text style={styles.textStyle}>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 50,
  },
  textStyle: {
    fontSize: 48,
    textAlign: "center",
  },
});

export default TrackCreateScreen;
