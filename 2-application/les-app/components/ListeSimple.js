
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

// Liste des noms à afficher
const noms = [
  { id: 1, nom: "John" },
  { id: 2, nom: "Jane" },
  { id: 3, nom: "Bob" },
  { id: 4, nom: "Alice" },
];

// Fonction pour afficher chaque élément de la liste
const afficherElement = ({ item }) => (
  // Lorsqu'on appuie sur un nom, une alerte s'affiche avec le nom sélectionné
  <TouchableOpacity
    style={styles.item}
    onPress={() => Alert.alert("Nom sélectionné:", item.nom)}
  >
    <Text style={styles.text}>{item.nom}</Text>
  </TouchableOpacity>
);

const ListeSimple = () => {
  return (
    <View style={styles.container}>
      {/* FlatList est utilisé pour afficher une liste d'éléments  */}
      <FlatList
        data={noms} // Données à afficher
        renderItem={afficherElement} // Comment chaque élément doit être affiché
        keyExtractor={(item) => item.id} // Comment chaque élément est identifié de manière unique
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  text: {
    fontSize: 18,
  },
});

export default ListeSimple;