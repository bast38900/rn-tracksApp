/*
    Screen for signing up to application
*/
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

//Import context to access data fro server
import { Context as AuthContext } from "../context/AuthContext";

//Import authentication form and navigation link
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

// Import navigation events to handle callback functions
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  // Get or set state from and to AuthContext
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        text="Already have an account? Sign in instead!"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SignupScreen;
