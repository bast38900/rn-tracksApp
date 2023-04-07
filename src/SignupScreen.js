/*
    Screen for signing up to application
*/
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3>Sign up for TrackerApp</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign up" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
