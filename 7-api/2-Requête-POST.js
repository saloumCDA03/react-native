/*
exe 2
Envoyer des Données avec Axios
Objectif : Créer un composant qui envoie des données à une API fictive en utilisant une requête POST avec Axios, puis affiche la réponse de l'API.


Créez un nouveau composant DataSender.js.

Structure du Composant :
Définissez une fonction nommée sendPostRequest à l'intérieur de votre composant. 
Cette fonction sera responsable de l'envoi des données à l'API.
Utilisez Axios pour envoyer une requête POST à l'URL suivante : https://jsonplaceholder.typicode.com/posts. Les données envoyées doivent inclure au moins un title, un body, et un userId.

Dans le rendu de votre composant, créez un bouton qui, lorsqu'il est cliqué, déclenche l'envoi des données en appelant sendPostRequest.
Affichez un message dans l'UI pour indiquer si l'envoi a réussi ou échoué, basé sur la réponse de la requête.

Résultat Attendu :
un composant React capable d'envoyer des données à une API en utilisant Axios et de gérer les réponses et erreurs de manière appropriée.

*/

/*
import React from "react";
import { View, Button, Alert } from "react-native";
import axios from "axios";

const DataSender = () => {
  // Fonction pour envoyer des données via une requête POST
  const sendPostRequest = () => {
    // Utilisation d'Axios pour envoyer une requête POST
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        // Corps de la requête avec les données à envoyer
        title: "Mon nouveau post",
        body: "Contenu du post",
        userId: 1,
      })
      .then((response) => {
        // Gestion de la réponse : affichage des données de réponse
        Alert.alert(
          "Succès",
          "Données reçues en réponse : " + JSON.stringify(response.data)
        );
      })
      .catch((error) => {
        // Gestion des erreurs : affichage de l'erreur
        Alert.alert(
          "Erreur",
          "Erreur lors de l'envoi des données : " + error.message
        );
      });
  };

  // Rendu du composant : un bouton pour déclencher l'envoi de données
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Button title="Envoyer les données" onPress={sendPostRequest} />
    </View>
  );
};

// Exportation du composant pour utilisation ailleurs dans l'application
export default DataSender;

*/
