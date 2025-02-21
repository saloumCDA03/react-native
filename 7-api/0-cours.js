/*
Qu'est-ce qu'Axios?
Axios est une bibliothèque JavaScript populaire utilisée pour effectuer des requêtes HTTP.
elle offre de nombreuses fonctionnalités utiles telles que la transformation automatique des données JSON, l'annulation de requête, et la gestion des erreurs.

******Installation d'Axios
Pour commencer, vous devez installer Axios dans votre projet React Native.
exécutez la commande suivante:
npm install axios

***********Utilisation d'Axios dans React Native
Importez Axios dans votre fichier:
import axios from 'axios';

*******Créez une instance Axios (optionnel):
Vous pouvez créer une instance Axios avec des paramètres par défaut qui seront appliqués à toutes les requêtes.
const api = axios.create({
  baseURL: 'https://api.exemple.com',
  headers: {
    'Content-Type': 'application/json',
    // Ajoutez d'autres en-têtes si nécessaire
  },
});

*****Effectuez une requête:
Utilisez l'instance Axios pour effectuer des requêtes. 
Voici un exemple de requête GET:
api.get('/chemin/vers/la/ressource')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Erreur lors de la requête:", error);
  });

Et un exemple de requête POST:
api.post('/chemin/vers/la/ressource', {
  param1: 'valeur1',
  param2: 'valeur2',
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Erreur lors de la requête:", error);
  });

****Gestion des erreurs:
Axios rejette la promesse lorsqu'une réponse HTTP avec un statut d'erreur est reçue. 
Vous pouvez gérer ces erreurs dans le bloc catch.

;
Conclusion
Axios est un outil puissant et flexible pour effectuer des requêtes HTTP dans React Native. 
En suivant ces étapes, vous devriez être en mesure de connecter votre application React Native à une API externe et de gérer les réponses et les erreurs de manière efficace. 
Assurez-vous de bien gérer les erreurs et les états de chargement pour offrir une expérience utilisateur fluide.
*/
