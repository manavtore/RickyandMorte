import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/homeScreen";
import AllCharactersScreen from "./screen/allCharacter";
import DeadCharactersScreen from "./screen/deadCharacter";
import AliveCharactersScreen from "./screen/aliveCharacter";
import CharacterDetailScreen from "./screen/characterDetail";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="allCharacter"
          component={AllCharactersScreen}
        ></Stack.Screen>
        <Stack.Screen name="deadCharacter" component={DeadCharactersScreen} />
        <Stack.Screen name="aliveCharcter" component={AliveCharactersScreen} />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
