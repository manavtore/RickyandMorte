import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./src/utlis/routes/approute";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true); 

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
