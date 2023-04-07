/*
    Screen for login in to application
*/
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Spacer from "./components/Spacer";

const SigninScreen = () => {
  return (
    <>
      <Spacer>
        <Text h3>Sign in to TrackerApp</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign in" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
