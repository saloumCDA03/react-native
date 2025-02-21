/**
Exercice : Création d'une Application de Navigation avec React Native

Objectif :
Créez une application React Native simple qui utilise le Stack Navigator pour afficher un écran d'accueil. 
L'écran d'accueil doit avoir un titre personnalisé "bonjour".

Instructions :

Installation des dépendances :

Installez les paquets nécessaires pour la navigation :
npm install @react-navigation/native @react-navigation/native-stack

Création de l'écran d'accueil :
Dans votre dossier de projet, créez un nouveau dossier appelé screens.
À l'intérieur du dossier screens, créez un fichier appelé HomeScreen.js.
Dans HomeScreen.js, créez un composant fonctionnel simple qui renvoie un texte comme "Bienvenue sur l'écran d'accueil!".

Mise en place de la navigation :
Dans votre fichier principal ( App.js), importez les composants nécessaires pour la navigation.
Configurez le Stack Navigator et ajoutez l'écran d'accueil à ce navigateur.
Assurez-vous de donner à l'écran d'accueil l'option de titre "bonjour".

Test de l'application :
Exécutez votre application sur un émulateur ou un appareil physique pour voir le résultat.
Vous devriez voir l'écran d'accueil avec le titre "bonjour" en haut.

Critères d'évaluation :
L'application doit s'exécuter sans erreurs.
L'écran d'accueil doit être affiché avec le texte "Bienvenue sur l'écran d'accueil!".
Le titre "bonjour" doit être visible en haut de l'écran d'accueil.
///////////
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bienvenue sur l'écran d'accueil!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
///////////
// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "bonjour" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

*/
/*
-//////////////
créez un fichier appelé DetailsScreen.js.
Dans DetailsScreen.js, créez un composant fonctionnel simple qui renvoie un texte comme "Bienvenue sur l'écran detail ".



-//////////////
-//////////////

---
Pour naviguer entre les écrans, vous pouvez utiliser la prop navigation fournie par @react-navigation à vos composants d'écran 
import React from 'react';
import { View, Button } from 'react-native';

const Screen = ({ navigation }) => {
  return (
    <View }>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
export default Screen;

ajoutez des bouton pour naviguer untre les ecrans

------------
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenue sur l'écran détail!</Text>
      <Button
        color="#6B13BD"
        title="Retour à l'Accueil"
        onPress={() => navigation.goBack()} // Utilisation de navigation.goBack pour revenir à l'écran précédent
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailsScreen;

-------------------
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenue sur l'écran d'accueil!</Text>
      <Button
        color="#6B13BD"
        title="Aller à Détails"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

-------------------
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";
import DetailsScreen from "./src/screen/DetailsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "bonjour" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailsScreen}
          options={{ title: "Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/
