/**
 *Le composant FlatList est un composant de liste performant qui permet d'afficher des données dans une liste. 
Il est entièrement compatible avec les plates-formes iOS et Android et prend en charge de nombreuses fonctionnalités utiles, telles que la pagination, le chargement de défilement, le rafraîchissement de tirer pour actualiser, et bien plus encore.
Pour utiliser le composant FlatList, 
vous devez fournir un tableau de données et une fonction de rendu qui définit comment chaque élément de la liste doit être affiché. 
Vous pouvez également fournir des options de configuration pour personnaliser l'apparence et le comportement de la liste.
Voici les étapes de base pour utiliser le composant FlatList :

Importez le composant FlatList depuis la bibliothèque React Native.



Créez un tableau de données à afficher dans la liste.
Créez une fonction de rendu qui définit comment chaque élément de la liste doit être affiché.
Utilisez le composant FlatList pour afficher la liste en fournissant le tableau de données et la fonction de rendu en tant que props.
Voici un exemple de code pour afficher une liste simple de noms avec FlatList :

import React from 'react';
import { View, Text, FlatList } from 'react-native';

const names = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Alice' },
];

const renderItem = ({ item }) => (
  <Text>{item.name}</Text>
);

const FlatListExample = () => {
  return (
    <View>
      <FlatList
        data={names}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FlatListExample;

Dans cet exemple, nous créons un tableau de données names qui contient une liste de noms. Nous créons ensuite une fonction de rendu renderItem qui définit comment chaque élément de la liste doit être affiché. Nous utilisons le composant FlatList pour afficher la liste en fournissant le tableau de données et la fonction de rendu en tant que props. Nous utilisons également la méthode keyExtractor pour spécifier une clé unique pour chaque élément de la liste.
Les avantages de l'utilisation du composant FlatList sont qu'il est performant, facile à utiliser et prend en charge de nombreuses fonctionnalités utiles pour l'affichage de listes de données.
 * 
 */

/**
 Créez une liste simple avec FlatList qui affiche une liste de noms. 
 Chaque nom doit être cliquable et doit afficher une alerte avec le nom sélectionné.
---------
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
      {// FlatList est utilisé pour afficher une liste d'éléments }
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



-----------------
vous n'avez pas besoin d'utiliser .map() dans ce cas. 
Lorsque vous utilisez FlatList dans React Native, il s'occupe de la boucle interne pour vous. 
Vous fournissez simplement les données via la prop data et indiquez comment chaque élément doit être rendu via la prop renderItem.

Dans l'exemple, FlatList prend le tableau noms et appelle la fonction afficherElement pour chaque élément du tableau. 
C'est similaire à ce que .map() ferait, mais FlatList est optimisé pour les grandes listes et offre des fonctionnalités 
supplémentaires comme le défilement et la réutilisation des éléments pour de meilleures performances.

Si vous n'utilisiez pas FlatList, vous pourriez utiliser .map() pour rendre chaque élément de la liste, 
mais dans le contexte de React Native, il est généralement recommandé d'utiliser FlatList pour les listes, 
car il est optimisé pour les performances sur les appareils mobiles.

-------------------- 
Créez une liste avec FlatList qui affiche une liste de photos. Chaque photo doit être cliquable et doit afficher une vue agrandie de la photo.

import React, { useState } from "react";
import { View, FlatList, Image, Modal, TouchableOpacity, StyleSheet } from "react-native";

const photos = [
  { id: "1", uri: "https://picsum.photos/200/300?random=1" },
  { id: "2", uri: "https://picsum.photos/200/300?random=2" },
  { id: "3", uri: "https://picsum.photos/200/300?random=3" },
  { id: "4", uri: "https://picsum.photos/200/300?random=4" },
  { id: "5", uri: "https://picsum.photos/200/300?random=5" },
];

const ListePhotos = () => {
  const [imageSelectionnee, setImageSelectionnee] = useState(null);

  return (
    <View style={styles.conteneur}>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        numColumns={2} // Affichage en grille de 2 colonnes
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setImageSelectionnee(item.uri)}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </TouchableOpacity>
        )}
      />

      {/* Modal pour afficher l'image agrandie }
      <Modal visible={!!imageSelectionnee} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.modal} onPress={() => setImageSelectionnee(null)}>
          <Image source={{ uri: imageSelectionnee }} style={styles.imageAgrandie} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)", // Fond sombre pour l'effet plein écran
    justifyContent: "center",
    alignItems: "center",
  },
  imageAgrandie: {
    width: "90%",
    height: "70%",
    borderRadius: 15,
  },
});

export default ListePhotos;

Créez une liste avec FlatList qui affiche une liste de tâches à faire. Chaque tâche doit avoir une case à cocher qui permet de la marquer comme terminée.
Créez une liste avec FlatList qui affiche une liste de produits. Chaque produit doit avoir un bouton "Ajouter au panier" qui permet d'ajouter le produit au panier.
Créez une liste avec FlatList qui affiche une liste de contacts. Chaque contact doit avoir un bouton "Envoyer un message" qui permet d'envoyer un message au contact.
Créez une liste avec FlatList qui affiche une liste de restaurants. Chaque restaurant doit avoir un bouton "Voir le menu" qui permet de voir le menu du restaurant.
Créez une liste avec FlatList qui affiche une liste de films. Chaque film doit avoir un bouton "V/ir les détails" qui permet de voir les détails du film.
 */
