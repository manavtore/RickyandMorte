import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import axios from "axios";
import Modal from "react-native-modal";
import { IconButton } from "react-native-paper";
import CharacterCard from "../utlis/components/CharacterCard";
import RickyImage from "../../assets/ricky3.jpeg";

export default function AliveCharactersScreen() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("alive"); 
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const fetchCharacters = () => {
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/`, {
        params: {
          status,
          species,
          gender,
          name: searchQuery,
        },
      })
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, [status, species, gender, searchQuery]);

  return (
    <ImageBackground source={RickyImage} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <IconButton icon="filter" size={27} onPress={toggleModal} />
          <TextInput
            style={styles.input}
            placeholder="Search by name"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <IconButton icon="magnify" size={27} onPress={fetchCharacters} />
        </View>

        <Modal
          isVisible={isModalVisible}
          onSwipeComplete={toggleModal}
          swipeDirection="left"
          style={styles.modal}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter by:</Text>
            <TouchableOpacity
              style={[
                styles.filterButton,
                status === "alive" && styles.selectedFilter,
              ]}
              onPress={() => setStatus("alive")}
            >
              <Text style={styles.filterText}>Status: Alive</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                status === "dead" && styles.selectedFilter,
              ]}
              onPress={() => setStatus("dead")}
            >
              <Text style={styles.filterText}>Status: Dead</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                species === "Human" && styles.selectedFilter,
              ]}
              onPress={() => setSpecies("Human")}
            >
              <Text style={styles.filterText}>Species: Human</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                species === "Alien" && styles.selectedFilter,
              ]}
              onPress={() => setSpecies("Alien")}
            >
              <Text style={styles.filterText}>Species: Alien</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                gender === "Male" && styles.selectedFilter,
              ]}
              onPress={() => setGender("Male")}
            >
              <Text style={styles.filterText}>Gender: Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                gender === "Female" && styles.selectedFilter,
              ]}
              onPress={() => setGender("Female")}
            >
              <Text style={styles.filterText}>Gender: Female</Text>
            </TouchableOpacity>
            <Button
              title="Apply Filters"
              onPress={() => {
                fetchCharacters();
                toggleModal();
              }}
            />
          </View>
        </Modal>

        {loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <FlatList
            data={characters}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <CharacterCard character={item} />
              </View>
            )}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 10,
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    height: "50%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  filterButton: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#e0e0e0",
  },
  selectedFilter: {
    backgroundColor: "#007BFF",
  },
  filterText: {
    fontSize: 16,
    color: "#000",
  },
});
