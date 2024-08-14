import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppRoutes from "../utlis/routes/approute";
import RickyImage from "../../assets/ricky.jpg";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={RickyImage} style={styles.container}>
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Rick and Morty Characters</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("AllCharacters");
          }}
        >
          <Text style={styles.cardText}>All Characters</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("AliveCharacters");
          }}
        >
          <Text style={styles.cardText}>Alive Characters</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("DeadCharacters");
          }}
        >
          <Text style={styles.cardText}>Dead Characters</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)", 
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
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
