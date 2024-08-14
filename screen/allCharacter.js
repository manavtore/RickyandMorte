import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet,ActivityIndicator } from "react-native";
import CharacterCard from "../cors/components/CharacterCard";
import axios from "axios";

export default function AllCharactersScreen() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
          setLoading(false); 
      }
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CharacterCard character={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
