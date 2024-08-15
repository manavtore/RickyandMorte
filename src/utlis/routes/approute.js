import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screen/homeScreen";
import AllCharactersScreen from "../../screen/allCharacter";
import DeadCharactersScreen from "../../screen/deadCharacter";
import AliveCharactersScreen from "../../screen/aliveCharacter";
import CharacterDetailScreen from "../../screen/characterDetail";

const RootStack = createStackNavigator();

export function RootStackScreen() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="AliveCharacters"
        component={AliveCharactersScreen}
      />
      <RootStack.Screen
        name="DeadCharacters"
        component={DeadCharactersScreen}
      />
      <RootStack.Screen 
      name="AllCharacters" 
      component={AllCharactersScreen}
      />
      <RootStack.Screen
        name="CharacterDetail"
        component={CharacterDetailScreen}
        options={{ title: "Character Detail" }}
      />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
