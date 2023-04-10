/*
    Screen for creating a new track
*/
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

// Import this hook, to pplave heading under the edge of the screen
import { SafeAreaView } from "react-navigation";

// Get maps component
import Map from "../components/Map";

// Get permission to track location
import { requestForegroundPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  // Helper function to get permission to track location, when entering the screen
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

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

export default TrackCreateScreen;
