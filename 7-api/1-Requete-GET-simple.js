/*
exe 1
 Création d'un Composant de Liste de Publications
Objectif : Développer un composant React Native qui récupère et affiche une liste de publications d'une API publique en utilisant Axios

Instructions :
Mise en place de l'environnement :
Installez Axios dans votre projet.

Création du composant PostsList :
Utilisez Axios pour faire une requête GET à l'API https://jsonplaceholder.typicode.com/posts afin de récupérer une liste de publications.

Utilisez useEffect pour déclencher la requête Axios au montage du composant. 
Assurez-vous que cet effet ne s'exécute qu'une seule fois.

Affichage des données :
Utilisez un ScrollView pour permettre le défilement des publications si leur nombre dépasse la hauteur de l'écran.
Mappez sur l'état contenant les publications pour créer et afficher un élément Text pour le titre et le corps de chaque publication. 
Assurez-vous d'attribuer une key unique à chaque élément de la liste pour optimiser les performances du rendu.

Gestion des erreurs :
Ajoutez une gestion d'erreurs appropriée pour la requête Axios afin d'alerter l'utilisateur en cas d'échec de la récupération des données.

Critères de succès :
Le composant PostsList affiche correctement les titres et corps des publications récupérées.
Les publications sont affichées dans un ScrollView et peuvent être défilées.
Les appels d'API sont effectués uniquement au montage du composant.
*/

/*
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import axios from "axios";

// PostsList récupère et affiche une liste de publications depuis une API
const PostsList = () => {
  // useState pour stocker les publications récupérées par la requête HTTP
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Effectue la requête HTTP au montage du composant
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Met à jour l'état 'posts' avec les données récupérées
        setPosts(response.data);
      })
      .catch((error) => {
        // En cas d'erreur, affiche l'erreur dans la console
        console.error(error);
      });
  }, []); // Le tableau vide signifie que l'effet ne s'exécute qu'au montage du composant

  // Rendu des publications dans un ScrollView pour permettre le défilement
  return (
    <ScrollView>
      {posts.map((post) => (
        <View key={post.id}>
          <Text style={{ fontWeight: "bold" }}>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default PostsList;
*/
