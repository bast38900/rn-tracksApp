/*
    "Loading" screen while app checking for existing token.
*/
import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

// Function to handle automatic login
const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  // Sign in if there's a token in async storage
  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
