/**
 Un composant est une unité d'interface utilisateur qui peut être réutilisée à travers différentes parties de l'application mobile. 

 Les composants peuvent être des éléments simples comme des boutons ou des champs de texte, ou des éléments plus complexes comme des listes ou des cartes.

Les composants fonctionnels sont la manière la plus courante de créer un composant en React Native. 
Ils sont nommés ainsi car ils sont simplement des fonctions JavaScript.

const MonComposant = () => {
    return <Text>Bonjour !</Text>;
}

Pour l'utiliser dans App.js :
function App() {
    return <MonComposant />;
}

Dans cet exemple, MonComposant commence par une MAJUSCULE. 
La MAJUSCULE est essentielle pour les noms de composants en React Native. 

 */

/**
 Exercice : Création d'un Composant 

Objectif : Créer un composant fonctionnel qui affiche le message "Bonjour !" à l'écran.

Étapes :

Définissez un composant fonctionnel nommé MonComposant qui renvoie le texte "Bonjour !" dans un élément <Text>.
Utilisez le composant MonComposant pour afficher le message à l'écran.
Lancez votre application pour voir le résultat.
 */

/** reponse 
 * 
 //////////MonComposant.js
import React from 'react';
import { Button, Alert, StatusBar, SafeAreaView, Text } from 'react-native';

const App = () => {

  const MonComposant = () => {
    return <Text >Bonjour !</Text>;
  }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <MonComposant />

      <StatusBar style="auto"
      />
    </SafeAreaView>
  );
};

export default App;



 
 */
