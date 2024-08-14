import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DeadCharactersScreen from "./screens/DeadCharactersScreen";
import FilterScreen from "./screens/FilterScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer initialRouteName="DeadCharacters">
      <Drawer.Screen name="DeadCharacters" component={DeadCharactersScreen} />
      <Drawer.Screen name="Filter" component={FilterScreen} />
    </Drawer>
  );
};

export default DrawerNavigator;
