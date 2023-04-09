/*
    Screen for administration off user account
*/
import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

// Import this hook, to pplave heading under the edge of the screen
import { SafeAreaView } from "react-navigation";

//Import spacer component for styling
import Spacer from "../components/Spacer";

//Import context to access data fro server
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  // Get or set state from and to AuthContext
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.viewStyle} forceInset={{ top: "always" }}>
      <Text style={styles.textStyle}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
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

export default AccountScreen;
