import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import Modal from "react-native-modal";


const FilterModal = ({
  isVisible,
  toggleModal,
  setStatus,
  setSpecies,
  setGender,
  fetchCharacters,
}) => {
  return (
    <Modal
      isVisible={isVisible}
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
  );
};

const styles = StyleSheet.create({
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

export default FilterModal
