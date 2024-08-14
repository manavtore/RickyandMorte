import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = (category) => {
    navigation.navigate("category", { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick and Morty Characters</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={()=>{
            navigation.navigate("allCharacter");
        }}
      >
        <Text style={styles.cardText}>All Characters</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={()=>{
         navigation.navigate("aliveCharcter");
      }}>
        <Text style={styles.cardText}>Alive Characters</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>{
             navigation.navigate("deadCharacter");
        }}
      >
        <Text style={styles.cardText}>Dead Characters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "80%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;
