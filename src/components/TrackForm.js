/*
    Reusable component for tracking forms
*/
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";

//Import spacer component for styling
import Spacer from "./Spacer";

//Import context to access data from server
import { Context as LocationContext } from "../context/LocationContext";

// Import hook to save tracks
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer />
      <Input value={name} onChangeText={changeName} placeholder="Enter name" />
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
