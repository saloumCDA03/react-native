/**
 *----------  Création d'un formulaire simple avec React Native
Introduction
nous allons explorer comment créer un formulaire simple avec React Native. 
Ce formulaire contiendra un champ de texte et un bouton de soumission. 
Lorsque l'utilisateur soumet le formulaire, une alerte s'affichera avec le texte saisi.

1. Comprendre les composants de base
TextInput : C'est le composant de React Native qui permet à l'utilisateur de saisir du texte. 
Il a plusieurs propriétés, dont onChangeText pour gérer le changement de texte et value pour afficher la valeur actuelle.

TouchableOpacity : C'est un conteneur qui rend ses enfants "touchables" et exécute une fonction lorsqu'il est pressé. Il est souvent utilisé pour créer des boutons.

Alert : C'est un composant qui affiche des alertes sous forme de boîtes de dialogue modales.
-------
 Créez un formulaire simple avec un champ de texte et un bouton de soumission. 
 Lorsque l'utilisateur soumet le formulaire, affichez une alerte avec le texte saisi.
 
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SimpleForm = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => { 
    Alert.alert('Text entered:', text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter text here"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SimpleForm;
-------------
onChangeText est une prop (propriété) que vous pouvez passer à certains composants React Native comme TextInput. Elle est appelée chaque fois que la valeur du champ de texte change. La valeur actuelle du champ de texte est passée en tant qu'argument unique à la fonction que vous fournissez.

Dans cet exemple, chaque fois que l'utilisateur tape ou modifie le texte dans le TextInput, la fonction setText est appelée avec le texte actuel comme argument, mettant à jour la valeur de text avec ce nouvel argument.
------------
///////////////////
Créez un formulaire avec plusieurs champs de texte et un bouton de soumission. 
Lorsque l'utilisateur soumet le formulaire, affichez les valeurs saisies dans une liste.
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

const FormulaireEtListe = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [listeSoumissions, setListeSoumissions] = useState([]);

  const soumettre = () => {
    // Ajouter les valeurs saisies à la liste des soumissions
    setListeSoumissions(listeSoumissions => [...listeSoumissions, { id: Date.now().toString(), nom, email }]);
    // Réinitialiser les champs après la soumission
    setNom('');
    setEmail('');
  };

  return (
    <View style={styles.conteneur}>
      <TextInput
        style={styles.champSaisie}
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />
      <TextInput
        style={styles.champSaisie}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button
        title="Soumettre"
        onPress={soumettre}
      />
      <FlatList
        data={listeSoumissions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.elementListe}>
            <Text>Nom: {item.nom}</Text>
            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteneur: {
    padding: 20,
  },
  champSaisie: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  elementListe: {
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
});

export default FormulaireEtListe;
////////////////////////////////////

Créez un formulaire avec des boutons radio pour sélectionner une option. 
Lorsque l'utilisateur soumet le formulaire, affichez l'option sélectionnée dans une alerte.

Créez un formulaire avec une case à cocher pour accepter les termes et conditions.
Désactivez le bouton de soumission tant que la case n'est pas cochée.

Créez un formulaire avec un sélecteur de date. Lorsque l'utilisateur sélectionne une date, affichez-la dans un champ de texte.
 */
