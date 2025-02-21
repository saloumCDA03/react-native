/*
React Native fournit une série de composants de base pour construire des interfaces utilisateur. 
Parmi ces composants, on trouve 

    <View>, <Text>, <Image>, <ScrollView>, <FlatList> et <Button>. 
    
Chacun de ces composants a un rôle spécifique dans la construction de l'interface utilisateur.

<View>
    Le composant <View> est l'élément de base pour la mise en page et le style. 
    Il fonctionne de manière similaire à une <div> en HTML. 
    Il sert de conteneur pour d'autres composants ou vues, et prend en charge la disposition avec Flexbox, le style, la gestion de certaines interactions tactiles et les contrôles d'accessibilité. 

<Text>
    Le composant <Text> est utilisé pour afficher du texte à l'écran. 
    Il permet de styliser et de structurer des chaînes de caractères, et peut également gérer des événements tactiles. 
    Il est similaire à une balise <p> en HTML      

<Image>
    Le composant <Image> est utilisé pour afficher des images dans l'application. Il fonctionne de manière similaire à la balise <img> en HTML et prend en charge différents types d'images


<ScrollView>
    Le composant <ScrollView> est un conteneur qui permet de faire défiler son contenu lorsque celui-ci dépasse la taille de l'écran. 
    Il est idéal pour afficher des vues avec un contenu de taille variable. 
    Cependant, il rend tous ses enfants en même temps, ce qui peut affecter les performances avec de grandes listes de données.

<Button>
    Le composant <Button> fournit une abstraction de bouton standard qui gère automatiquement les pressions de l'utilisateur. 
    Il est simple à utiliser pour des interactions basiques.

*/

/* 1. Nettoyage de l'application initiale
Ouvrez le fichier App.js et supprimez le code par défaut à l'intérieur du composant App.
Assurez-vous que votre composant App retourne une vue vide .

import { View } from 'react-native';

export default function App() {
  return (
    <View >
    </View>
  );
}
-------------
la barre d'état est la zone située en haut de l'écran qui affiche des informations telles que l'heure,
le niveau de la batterie et la connectivité réseau.
La hauteur de cette barre peut varier en fonction de l'appareil et du système d'exploitation.
Lorsque vous utilisez top: 
  Constants.statusBarHeight dans le style d'un composant, vous définissez la marge supérieure (top) de 
  ce composant en fonction de la hauteur de la barre d'état. 
  Cela permet d'éviter que le contenu de votre application ne soit masqué par la barre d'état, en particulier sur les appareils dotés d'une encoche ou d'une barre d'état plus grande.

import Constants from 'expo-constants';
style={{ marginTop: Constants.statusBarHeight }}
-------------
2. Affichage de texte avec <Text>
Objectif : Apprendre à utiliser le composant <Text> pour afficher du texte à l'écran.

Instructions :

Dans le composant App, ajoutez un composant <Text> qui affiche "Bienvenue sur React Native !".

----------------------------
3 Affichage d'une image avec <Image>
La propriété source est définie avec un objet contenant l'attribut uri qui spécifie l'URL de l'image.

Pour afficher des images locales la propriété source prend la fonction require() avec le chemin en parametre . 
Objectif : Apprendre à utiliser le composant <Image> pour afficher une image.

Instructions :

Ajoutez un composant <Image> pour afficher une image à partir d'une URL.
Spécifiez les propriétés source
https://picsum.photos/

import { Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View >
      <Text > hello</Text>
      <Image
      source={require('./assets/my-image.jpg')}
      style={{width: 200, height: 200}}
    />
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
------------------------
4. Défilement de contenu avec <ScrollView>
Objectif : Apprendre à utiliser le composant <ScrollView> pour permettre le défilement du contenu.

Instructions :

Créez plusieurs composants <Text> ou <Image /> .
Enveloppez les dans un composant <ScrollView> pour permettre le défilement lorsque le contenu dépasse la taille de l'écran.

import React from 'react';
import { ScrollView, Text } from 'react-native';

const App = () => {
  const str = "Hello";
  const result = Array.from(str);
  console.log(result);
  return (
    <ScrollView>
      {Array.from({ length: 200 }, (_, i) => (
        <Text key={i}>Élément {i + 1}</Text>
      ))}
    </ScrollView>
  );
};

export default App;
---------------

5 Interaction avec des boutons utilisant <Button>
Objectif : Apprendre à utiliser le composant <Button> pour gérer les interactions utilisateur.

Instructions :
Ajoutez un composant <Button> avec une propriété title définissant le texte du bouton.
Implémentez une fonction qui affiche un message dans la console lorsque le bouton est pressé.

import React from 'react';
import { Button, Alert, StatusBar, SafeAreaView } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('Bouton pressé !');
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>

      <Button

        title="Appuyez ici"
        onPress={handlePress}
      />
      <StatusBar style="auto"
      />
    </SafeAreaView>
  );
};

export default App;
*/