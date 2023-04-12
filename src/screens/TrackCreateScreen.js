/*
    Screen for creating a new track
*/
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

// Import this hook, to plave heading under the edge of the screen, and track navigation
import { SafeAreaView, withNavigationFocus } from "react-navigation";

// Get maps component
import Map from "../components/Map";

// Import fake location
import "../_mockLocation";

// Import useLocation to get current location
import useLocation from "../hooks/useLocation";

//Import context to access data from server
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView style={styles.viewStyle} forceInset={{ top: "always" }}>
      <Text style={styles.textStyle}>Create a Track</Text>
      <Map />
      {err ? (
        <Text style={{ color: "red", fontSize: 18 }}>
          *Please enable location services
        </Text>
      ) : null}
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

export default withNavigationFocus(TrackCreateScreen);
