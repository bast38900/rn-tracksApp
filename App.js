// import react library from react
import react from "react";

// import navigation libraries
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

// import screens from scr folder
import AccountScreen from "./src/AccountScreen";
import SigninScreen from "./src/SigninScreen";
import SignupScreen from "./src/SignupScreen";
import TrackCreateScreen from "./src/TrackCreateScreen";
import TrackDetailScreen from "./src/TrackDetailScreen";
import TrackListScreen from "./src/TrackListScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

export default createAppContainer(switchNavigator);
