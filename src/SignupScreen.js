/*
    Screen for signing up to application
*/
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text>SignupScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
