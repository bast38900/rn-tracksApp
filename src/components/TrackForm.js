/*
    Reusable component for tracking forms
*/
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";

//Import spacer component for styling
import Spacer from "./Spacer";

const TrackForm = ({ onSubmit, submitButtonText }) => {
  const [track, settrack] = useState("");

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Track Name"
          value={track}
          onChangeText={settrack}
        />
        <Button title={submitButtonText} onPress={() => onSubmit({ track })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
