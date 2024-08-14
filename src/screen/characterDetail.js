import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import RickyImage from "../../assets/ricky3.jpeg";

const CharacterDetailScreen = ({ route }) => {
  const { characterId } = route.params;
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {

    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  if (!character) {
    return <Text>No character data found</Text>;
  }

 return (
   <ImageBackground source={RickyImage} style={styles.container}>
     <ScrollView style={styles.container}>
       <Image source={{ uri: character.image }} style={styles.image} />
       <Text style={styles.name}>{character.name}</Text>
       <Text style={styles.detail}>Status: {character.status}</Text>
       <Text style={styles.detail}>Species: {character.species}</Text>
       <Text style={styles.detail}>Gender: {character.gender}</Text>
       <Text style={styles.detail}>Origin: {character.origin.name}</Text>
       <Text style={styles.episodesTitle}>Episodes:</Text>
       {character.episode.map((episodeUrl, index) => {
         const episodeNumber = episodeUrl.split("/").pop();
         return (
           <Text key={index} style={styles.episode}>
             Episode {episodeNumber}
           </Text>
         );
       })}
     </ScrollView>
   </ImageBackground>
 );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  detail: {
    fontSize: 18,
    marginVertical: 5,
  },
  episodesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  episode: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default CharacterDetailScreen;
