/**
1. Comprendre les composants de base
TextInput : C'est le composant de React Native qui permet à l'utilisateur de saisir du texte. Il a plusieurs propriétés, dont onChangeText pour gérer le changement de texte et value pour afficher la valeur actuelle.

TouchableOpacity : C'est un conteneur qui rend ses enfants "touchables" et exécute une fonction lorsqu'il est pressé. Il est souvent utilisé pour créer des boutons.

Alert : C'est un composant qui affiche des alertes sous forme de boîtes de dialogue modales.

*/ ////////////

/**
 * --Pour créer un composant qui affiche une image à l'écran  vous pouvez utiliser le composant Image 

. Voici un exemple de code qui affiche une image à partir d'une URL :-
----------
Créez un composant qui affiche une image à l'écran.

import React from "react";
import { Image, View, ScrollView } from "react-native";

const MonImage = () => {
  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://static1.millenium.org/articles/3/39/60/13/@/1640368-gow-ragn-article_cover_bd-2.jpg",
        }}
        style={{ width: 200, height: 300 }}
      />
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: 200, height: 300 }}
      />
      <Image
        source={{
          uri: "https://static1.millenium.org/articles/3/39/60/13/@/1640368-gow-ragn-article_cover_bd-2.jpg",
        }}
        style={{ width: 200, height: 300 }}
      />
      <Image
        style={{ width: 200, height: 300 }}
        source={require("../assets/icon.png")}
      />
      <Image
        source={{
          uri: "https://static1.millenium.org/articles/3/39/60/13/@/1640368-gow-ragn-article_cover_bd-2.jpg",
        }}
        style={{ width: 200, height: 300 }}
      />
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: 200, height: 300 }}
      />
      <Image
        source={{
          uri: "https://static1.millenium.org/articles/3/39/60/13/@/1640368-gow-ragn-article_cover_bd-2.jpg",
        }}
        style={{ width: 200, height: 300 }}
      />
      <Image
        style={{ width: 200, height: 300 }}
        source={require("../assets/icon.png")}
      />
    </ScrollView>
  );
};

export default MonImage;

////////////////////////////////
-----
Pour créer un composant qui permet à l'utilisateur d'entrer du texte, vous pouvez utiliser le composant TextInput 

Créez un composant qui permet à l'utilisateur d'entrer du texte.
le texte saisi doit  s'afficher sous le champs input

import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet,KeyboardAvoidingView, Platform  } from "react-native";

const AffichageSaisie = () => {
  const [texte, setTexte] = useState("");

  const gererChangementTexte = (nouveauTexte) => {
    setTexte(nouveauTexte);
  };

  return (
    <View style={styles.conteneur}>
      <Text style={styles.etiquette}>Saisissez votre texte :</Text>
      <TextInput
        style={styles.champSaisie}
        onChangeText={gererChangementTexte}
        value={texte}
      />
      <Text style={styles.texteAffiche}>Vous avez saisi : {texte}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteneur: {
    padding: 20,
  },
  etiquette: {
    marginBottom: 10,
  },
  champSaisie: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  texteAffiche: {
    marginTop: 20,
  },
});

export default AffichageSaisie;

/////////////////////////////////////////////////////
Pour créer un composant qui affiche une liste d'éléments à l'écran en utilisant React Native Expo, vous pouvez utiliser le composant FlatList
vous n'avez pas besoin d'utiliser .map() dans ce cas. 
Lorsque vous utilisez FlatList dans React Native, il s'occupe de la boucle interne pour vous. 
Vous fournissez simplement les données via la prop data et indiquez comment chaque élément doit être rendu via la prop renderItem.
exemple:
    const donnees = [
      { id: '1', titre: 'Élément 1' },
      { id: '2', titre: 'Élément 2' },
      { id: '3', titre: 'Élément 3' },
      // Ajoutez plus d'éléments ici
    ];
    const ExempleFlatList = () => {
      const renderItem = ({ item }) => (
        <View >
          <Text >{item.titre}</Text>
        </View>
      );
      return (
        <FlatList
          data={donnees}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      );
    };
Dans l'exemple que je vous ai donné, FlatList prend le tableau noms et appelle la fonction afficherElement pour chaque élément du tableau. 
C'est similaire à ce que .map() ferait, mais FlatList est optimisé pour les grandes listes et offre des fonctionnalités supplémentaires comme le défilement et la réutilisation des éléments pour de meilleures performances.
-------
Créez un composant qui affiche une liste d'éléments à l'écran.

// ListeElements.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const donnees = [
  { id: '1', titre: 'Élément 1' },
  { id: '2', titre: 'Élément 2' },
  { id: '3', titre: 'Élément 3' },
  { id: '4', titre: 'Élément 4' },
  { id: '5', titre: 'Élément 5' },
];

const ListeElements = () => {
  const afficherElement = ({ item }) => {
    return (
      <View>
        <Text>{item.titre}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={donnees}
      renderItem={afficherElement}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ListeElements;

///////////////////
Alert
Créez une liste simple avec FlatList qui affiche une liste de noms. Chaque nom doit être cliquable et doit afficher une alerte avec le nom sélectionné.
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


 */
