/*
    Screen for login in to application
*/
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

//Import context to access data from server
import { Context as AuthContext } from "../context/AuthContext";

//Import authentication form and navigation link
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

// Import navigation events to handle callback functions
import { NavigationEvents } from "react-navigation";

const SigninScreen = ({ navigation }) => {
  // Get or set state from and to AuthContext
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign in to your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign in"
        onSubmit={signin}
      />
      <NavLink
        text="Don't have an account? Sign up instead!"
        routeName="Signup"
      />
    </View>
  );
};

// Removing the top header
SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
