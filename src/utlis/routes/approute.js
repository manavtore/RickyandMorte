import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screen/homeScreen";
import AllCharactersScreen from "../../screen/allCharacter";
import DeadCharactersScreen from "../../screen/deadCharacter";
import AliveCharactersScreen from "../../screen/aliveCharacter";
import CharacterDetailScreen from "../../screen/characterDetail";



const RootStack = createStackNavigator();
const CharacterStack = createStackNavigator();

function CharacterStackScreen({ type }) {
  return (
    <CharacterStack.Navigator>
      <CharacterStack.Screen
        name={`${type}Characters`}
        component={
          type === "Alive"
            ? AliveCharactersScreen
            : type === "Dead"
            ? DeadCharactersScreen
            : AllCharactersScreen
        }
      />
      <CharacterStack.Screen
        name="CharacterDetail"
        component={CharacterDetailScreen}
        options={{ title: "Character Detail" }}
      />
    </CharacterStack.Navigator>
  );
}

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
        component={() => <CharacterStackScreen type="Alive" />}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DeadCharacters"
        component={() => <CharacterStackScreen type="Dead" />}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="AllCharacters"
        component={() => <CharacterStackScreen type="All" />}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
