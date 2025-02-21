/* ***************Introduction à la Gestion des Erreurs***************

La gestion des erreurs est une partie cruciale de la programmation. 
En JavaScript, l'instruction try...catch permet de gérer les erreurs de manière élégante sans arrêter l'exécution du programme.
----
Syntaxe de base
try {
  // Code susceptible de provoquer une erreur
} catch (erreur) {
  // Code à exécuter en cas d'erreur
}
---
Exemple Simple
try {
  console.log(nonExistantVariable); // Cette variable n'existe pas, donc une erreur est lancée
} catch (erreur) {
  console.log("Une erreur s'est produite:", erreur.message);
}
Dans cet exemple, le programme n'est pas interrompu par l'erreur et le message d'erreur est affiché dans la console.
----

Lancer des Erreurs
Vous pouvez également lancer vos propres erreurs avec throw.
try {
  throw new Error("Ceci est une erreur personnalisée");
} catch (erreur) {
  console.log(erreur.message);
}

---
Bloc finally
Le bloc finally est exécuté après les blocs try et catch, qu'une erreur se soit produite ou non.
try {
  // Code
} catch (erreur) {
  // Gestion de l'erreur
} finally {
  // Code à exécuter après try/catch
}
---

Gestion des Erreurs Asynchrones
Dans les fonctions asynchrones, vous pouvez utiliser try...catch pour gérer les erreurs des promesses.
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (erreur) {
    console.log("Erreur lors de la récupération des données:", erreur);
  }
}
---
Bonnes Pratiques
Ne pas Ignorer les Erreurs: 
    Ignorer les erreurs peut conduire à des comportements imprévisibles de votre application.
Fournir des Messages d'Erreur Utiles: 
    Les messages d'erreur doivent être clairs et fournir suffisamment d'informations pour comprendre et résoudre le problème.
---

Conclusion
La gestion des erreurs est essentielle pour créer des applications robustes. 
En utilisant try...catch, vous pouvez vous assurer que votre programme peut gérer les erreurs et continuer à fonctionner même lorsque des problèmes surviennent.
*/



/* 
***********Capture d'une Erreur Simple

Exercice 1: Capture d'une Erreur Simple
Écrivez une fonction diviser(a, b) qui divise deux nombres. Utilisez un bloc try...catch pour gérer une division par zéro et affichez un message d'erreur "Erreur: Division par zéro" lorsque cela se produit.

console.log(diviser(10, 2)); // Devrait afficher 5
console.log(diviser(10, 0)); // Devrait afficher "Erreur: Division par zéro"

----------------
function diviser(a, b) {
  try {
    if (b === 0) throw new Error("Erreur: Division par zéro");
    return a / b;
  } catch (erreur) {
    console.log(erreur);
  }
}

console.log(diviser(10, 2)); // Devrait afficher 5
console.log(diviser(10, 0)); // Devrait afficher "Erreur: Division par zéro"


***************Exercice 2: Lancer une Erreur Personnalisée
Exercice 2: Lancer une Erreur Personnalisée
Créez une fonction verifierAge(age) qui vérifie si l'âge est au moins 18. Si l'âge est inférieur à 18, lancez une erreur personnalisée "Erreur: Vous devez avoir au moins 18 ans." et capturez cette erreur avec un bloc try...catch.


function verifierAge(age) {
  try {
    if (age < 18) throw new Error("Erreur: Vous devez avoir au moins 18 ans.");
    console.log("Vous avez l'âge requis !");
  } catch (error) {
    console.log(error.message);
  }
}
verifierAge(20); // Affiche "Vous avez l'âge requis !"
verifierAge(16); // Affiche "Erreur: Vous devez avoir au moins 18 ans."

-

*********** Exercice 3: Gestion des Types d'Erreur

Exercice 3: Utilisation de finally
Écrivez une fonction saluer(nom) qui salue une personne par son nom. Si le nom n'est pas fourni, lancez une erreur. Utilisez try...catch pour gérer l'erreur et finally pour afficher un message "Fin de la fonction saluer" à la fin de la fonction, que l'erreur se produise ou non.
saluer("John"); // Affiche "Bonjour, John !" et "Fin de la fonction saluer"
saluer(); // Affiche "Erreur: Nom non fourni" et "Fin de la fonction saluer"

function saluer(nom) {
  try {
    if (!nom) throw new Error("Erreur: Nom non fourni");
    console.log(`Bonjour, ${nom} !`);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Fin de la fonction saluer");
  }
}
saluer("John"); // Affiche "Bonjour, John !" et "Fin de la fonction saluer"
saluer(); // Affiche "Erreur: Nom non fourni" et "Fin de la fonction saluer"


************ Exercice 4: Gestion des Types d'Erreur
Définissez une fonction convertirEnNombre(valeur) qui tente de convertir une valeur en nombre. Si la conversion échoue, lancez une TypeError avec un message d'erreur approprié. Utilisez try...catch pour gérer l'erreur et affichez le type de l'erreur si c'est une TypeError.

--------------------------------
function convertirEnNombre(valeur) {
  try {
    let resultat = Number(valeur);
    if (isNaN(resultat)) throw new TypeError("Erreur: La valeur ne peut pas être convertie en nombre");
    console.log(resultat);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(error.message);
    } else {
      console.log("Une autre erreur s'est produite");
    }
  }
}
convertirEnNombre("123"); // Affiche 123
convertirEnNombre("abc"); // Affiche "Erreur: La valeur ne peut pas être convertie en nombre"


*/
**************************************************
/*
Dans le développement d'applications React Native, il est courant de faire des requêtes asynchrones pour récupérer ou envoyer des données à un serveur. 
Axios est une bibliothèque populaire qui facilite ces requêtes HTTP. 
Cependant, comme toute opération asynchrone, les requêtes HTTP peuvent échouer pour diverses raisons, et il est crucial de gérer ces erreurs correctement pour assurer une bonne expérience utilisateur.
--
Pour commencer à utiliser Axios, vous devez l'installer dans votre projet React Native :
npm install axios
--
Gestion Basique des Erreurs
La gestion des erreurs avec Axios peut être réalisée en utilisant les blocs try...catch avec les async/await. 
Voici un exemple basique :
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
  } catch (error) {
    console.error('Une erreur est survenue', error);
  }
}
Dans cet exemple, si la requête réussit, les données seront affichées dans la console. 
Si la requête échoue, l'erreur sera capturée et affichée.
--

Gestion des Erreurs Spécifiques
Axios encapsule l'erreur dans un objet qui contient des informations détaillées. 
Vous pouvez utiliser ces informations pour gérer des cas d'erreur spécifiques.
try {
  // ...
} catch (error) {
  if (error.response) {
    // La requête a été faite et le serveur a répondu avec un statut hors de la plage 200
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // La requête a été faite mais aucune réponse n'a été reçue
    console.log(error.request);
  } else {
    // Quelque chose s'est mal passé lors de la configuration de la requête
    console.log('Error', error.message);
  }
}
--

Annulation de Requête
Axios permet d'annuler des requêtes en utilisant un CancelToken.
const source = axios.CancelToken.source();

axios.get('https://jsonplaceholder.typicode.com/posts/1', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Requête annulée', thrown.message);
  } else {
    // gérer l'erreur
  }
});

// Annuler la requête
source.cancel('Requête annulée par l\'utilisateur');
---

Gestion des Temps d'Attente
Vous pouvez définir un temps d'attente pour une requête avec l'option timeout.
try {
  await axios.get('https://jsonplaceholder.typicode.com/posts/1', { timeout: 1000 });
} catch (error) {
  if (error.code === 'ECONNABORTED') {
    console.log('La requête a pris trop de temps');
  } else {
    console.error('Une erreur est survenue', error);
  }
}
----

Requêtes Simultanées
Axios permet de faire plusieurs requêtes simultanément en utilisant axios.all.
try {
  const [response1, response2] = await axios.all([
    axios.get('https://jsonplaceholder.typicode.com/posts/1'),
    axios.get('https://jsonplaceholder.typicode.com/posts/2')
  ]);
  console.log('Réponse 1:', response1.data);
  console.log('Réponse 2:', response2.data);
} catch (error) {
  console.error('Erreur lors des requêtes simultanées', error);
}
---

Transformation de Réponse
Vous pouvez transformer les données de réponse avant qu'elles ne soient passées à then ou catch.
const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
  transformResponse: [function (data) {
    const transformedData = JSON.parse(data);
    transformedData.title = transformedData.title.toUpperCase();
    return transformedData;
  }]
});
console.log(response.data);
---

La gestion des erreurs asynchrones est un aspect crucial du développement d'applications React Native. 
Axios fournit des outils puissants pour faciliter cette tâche, permettant une expérience utilisateur plus robuste et fiable. 
En suivant les meilleures pratiques et en utilisant les fonctionnalités d'Axios, vous pouvez gérer efficacement les erreurs asynchrones dans vos applications.
*/
**************************************************
/******************************
 JSONPlaceholder est un service en ligne qui fournit de fausses données JSON pour les tests et le prototypage. 
 Il est basé sur un logiciel open source qui permet de simuler une API REST. 
 Vous pouvez l'utiliser pour récupérer des données factices dans différents formats et structures, ce qui est particulièrement utile lors du développement d'applications front-end lorsque le back-end n'est pas encore prêt ou disponible.

Voici quelques-unes des fonctionnalités principales de JSONPlaceholder:
Posts: Vous pouvez récupérer une liste de messages, un message spécifique, ajouter un nouveau message, mettre à jour un message existant ou supprimer un message.
Comments: De la même manière que pour les messages, vous pouvez travailler avec des commentaires.
Albums et Photos: JSONPlaceholder offre également des endpoints pour récupérer des albums et des photos.
Todos: Vous pouvez récupérer et gérer une liste de tâches à faire.
Users: Il est possible de récupérer des informations sur les utilisateurs.

Pour utiliser JSONPlaceholder, vous n'avez pas besoin de vous inscrire ou de configurer quoi que ce soit. 
Vous pouvez simplement faire des requêtes HTTP vers les endpoints fournis. 
------------------
Voici les endpoints principaux fournis par JSONPlaceholder :
Posts
GET /posts: Récupère la liste de tous les posts.
GET /posts/1: Récupère un post spécifique par son ID.
POST /posts: Crée un nouveau post.
PUT /posts/1: Met à jour un post spécifique par son ID.
PATCH /posts/1: Met à jour partiellement un post spécifique par son ID.
DELETE /posts/1: Supprime un post spécifique par son ID.

Comments
GET /comments: Récupère la liste de tous les commentaires.
GET /comments?postId=1: Récupère les commentaires d'un post spécifique.
GET /comments/1: Récupère un commentaire spécifique par son ID.

Albums
GET /albums: Récupère la liste de tous les albums.
GET /albums/1: Récupère un album spécifique par son ID.
GET /albums/1/photos: Récupère les photos d'un album spécifique.

Photos
GET /photos: Récupère la liste de toutes les photos.
GET /photos/1: Récupère une photo spécifique par son ID.

Todos
GET /todos: Récupère la liste de toutes les tâches.
GET /todos/1: Récupère une tâche spécifique par son ID.

Users
GET /users: Récupère la liste de tous les utilisateurs.
GET /users/1: Récupère un utilisateur spécifique par son ID.
Chacun de ces endpoints vous permet de simuler différentes actions CRUD (Create, Read, Update, Delete) et de tester le comportement de votre application en réponse à ces actions.

------------
Voici un exemple de requête pour récupérer la liste des messages:
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des posts', error);
  });


JSONPlaceholder est un outil très pratique pour les développeurs front-end qui souhaitent tester leurs applications avec des données réalistes sans avoir à attendre que le back-end soit prêt.
 
 ********************************/
/*
******Exercice 5: Requête Axios Basique avec Gestion d'Erreur
Installez Axios dans votre projet React Native.
Créez une fonction asynchrone qui fait une requête GET vers https://jsonplaceholder.typicode.com/posts/1 en utilisant Axios.
Utilisez try...catch pour gérer les erreurs potentielles.
Affichez la réponse dans la console en cas de succès, et le message d'erreur en cas d'échec.
testez l'erreur en modifiant l'url
-----------
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const Basique = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response.data);
      } catch (error) {
        console.error('Une erreur est survenue', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>regarde dans la console </Text>
    </View>
  );
};

export default Basique;


/////////////////////////////

*********Exercice 6: Gestion d'Erreurs Spécifiques
Modifiez la fonction de l'exercice précédent.
Ajoutez une logique pour gérer spécifiquement les erreurs de réseau et les erreurs HTTP (erreurs 4xx et 5xx).
Affichez des messages d'erreur appropriés pour chaque type d'erreur.
------
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const BasiqueSpe = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          console.error('Erreur HTTP:', error.response.data);
        } else if (error.request) {
          console.error('Erreur de réseau:', error.request);
        } else {
          console.error('Erreur:', error.message);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>regardez dans la console </Text>
    </View>
  );
};

export default BasiqueSpe;

/////////////////

Exercice 7: Annulation de Requête
Créez une fonction asynchrone qui fait une requête GET vers une URL de votre choix.
Utilisez Axios pour créer un token d'annulation.
Annulez la requête après un délai défini en utilisant setTimeout.
Gérez l'erreur d'annulation et affichez un message approprié.
---------
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const Annulation = () => {
  useEffect(() => {
    const fetchData = async () => {
      const source = axios.CancelToken.source();

      setTimeout(() => {
        source.cancel('Requête annulée après un délai');
      }, 5000);

      try {
        await axios.get('https://jsonplaceholder.typicode.com/posts/1', { cancelToken: source.token });
        console.log('Requête réussie');
      } catch (error) {
        if (axios.isCancel(error)) {
          console.error('Requête annulée:', error.message);
        } else {
          console.error('Une erreur est survenue:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>regardez dans la console </Text>
    </View>
  );
};

export default Annulation;

////////////////////

***********Exercice 8: Gestion des Temps d'Attente
Configurez un temps d'attente (timeout) pour une requête Axios.
Faites une requête vers une URL qui prend beaucoup de temps à répondre ou simulez un long temps de réponse.
Gérez l'erreur de dépassement de temps et affichez un message d'erreur.
-----------
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('https://jsonplaceholder.typicode.com/posts/1', { timeout: 1000 });
        console.log('Requête réussie');
      } catch (error) {
        if (error.code === 'ECONNABORTED') {
          console.error('La requête a pris trop de temps et a été interrompue');
        } else {
          console.error('Une erreur est survenue:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>regardez dans la console </Text>
    </View>
  );
};

export default App;



/////////////////////////////////

Exercice 9: Requêtes Simultanées
Utilisez axios.all pour faire plusieurs requêtes simultanées vers https://jsonplaceholder.typicode.com/posts/1 et https://jsonplaceholder.typicode.com/posts/2.
Gérez les erreurs pour chaque requête individuellement.
Affichez les résultats dans la console en cas de succès.
----------
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await axios.all([
          axios.get('https://jsonplaceholder.typicode.com/posts/1'),
          axios.get('https://jsonplaceholder.typicode.com/posts/2')
        ]);
        console.log('Réponse 1:', response1.data);
        console.log('Réponse 2:', response2.data);
      } catch (error) {
        console.error('Une erreur est survenue lors des requêtes simultanées:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>regardez dans la console </Text>
    </View>
  );
};

export default App;

//////////

Exercice 10: Transformation de Réponse
Faites une requête GET vers https://jsonplaceholder.typicode.com/posts/1 en utilisant Axios.
Utilisez la fonction transformResponse d'Axios pour modifier la réponse avant qu'elle ne soit traitée par le bloc then ou catch.
Gérez les erreurs et affichez la réponse transformée dans la console.
--------
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
          transformResponse: [function (data) {
            const transformedData = JSON.parse(data);
            transformedData.title = transformedData.title.toUpperCase();
            return transformedData;
          }]
        });
        console.log('Réponse transformée:', response.data);
      } catch (error) {
        console.error('Une erreur est survenue:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>regardez dans la console </Text>
    </View>
  );
};

export default App;

*/