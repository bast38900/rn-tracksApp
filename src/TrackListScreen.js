/*
    Screen for listing all tracks
*/
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to Track Details"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
