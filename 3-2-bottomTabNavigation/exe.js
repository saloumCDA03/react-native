/*
Le NavigationContainer est un composant essentiel de React Navigation. Il englobe tous les navigateurs de l'application et fournit un contexte de navigation nécessaire pour le fonctionnement de la navigation. Pensez-y comme à l'environnement global qui contient l'état de votre navigation et permet à vos navigateurs et écrans de communiquer entre eux et de changer d'état. Vous devez utiliser NavigationContainer une seule fois dans votre application, généralement à la racine de votre composant principal, pour activer la navigation.

<Tab.Navigator> est un composant fourni par @react-navigation/bottom-tabs dans React Native, utilisé pour créer une barre de navigation inférieure dans votre application. Ce composant permet de naviguer entre différents écrans ou vues à l'aide d'onglets situés au bas de l'écran. Chaque onglet peut être associé à un écran spécifique de votre application, permettant ainsi une navigation rapide et intuitive.

Tab.Screen est un composant de React Navigation utilisé dans Tab.Navigator pour définir les écrans individuels que chaque onglet représente. Chaque Tab.Screen doit avoir un nom (name prop) et un composant (component prop) associé, ce qui permet de définir le contenu affiché lorsque l'onglet est actif. Vous pouvez également utiliser la prop options pour personnaliser l'apparence et le comportement de chaque onglet, comme définir des icônes ou des titres spécifiques.

1: Hello World Tab: 
Créez deux onglets simples "HomeScreen" et "SettingsScreen" sans personnalisation.


Installer les Packages Requis :
    npm install @react-navigation/native @react-navigation/bottom-tabs

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import HomeScreen from "./src/components/HomeScreen";
import SettingsScreen from "./src/components/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});



/////////////////////////////
react-native-vector-icons est une bibliothèque populaire pour React Native qui offre une vaste collection d'icônes sous forme de polices vectorielles. Elle supporte de nombreux ensembles d'icônes bien connus comme FontAwesome, MaterialIcons, Ionicons, et plus. Facile à intégrer et à utiliser, elle permet d'ajouter des icônes de haute qualité à votre application React Native, améliorant ainsi l'interface utilisateur avec des éléments visuels attrayants et cohérents.

installé react-native-vector-icons dans votre projet en exécutant la commande suivante :
    npm install react-native-vector-icons
    npm install react-native-vector-icons

Importez les icônes que vous souhaitez utiliser pour chaque onglet. 
Vous pouvez consulter la documentation de react-native-vector-icons pour connaître les noms des icônes disponibles.
https://oblador.github.io/react-native-vector-icons/

Icônes des Onglets: Ajoutez des icônes distinctes à chaque onglet en utilisant react-native-vector-icons.

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/components/HomeScreen";
import SettingsScreen from "./src/components/SettingsScreen";
import Icon from "react-native-vector-icons/FontAwesome";

// Création d'un BottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Conteneur de navigation pour l'ensemble de l'application
    <NavigationContainer>
      {/* Navigator pour les onglets inférieurs /}
      <Tab.Navigator>
        {/* Premier onglet pour l'écran d'accueil /}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // Icône pour l'onglet Accueil
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        {/* Deuxième onglet pour l'écran des paramètres /}
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            // Icône pour l'onglet Paramètres
            tabBarIcon: ({ color, size }) => (
              <Icon name="cog" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});


//////////////////////////////////
screenOptions permet de définir des options de navigation communes à tous les écrans d'un navigateur. 
Cela inclut la personnalisation de l'apparence de la barre d'onglets dans un Tab.Navigator, comme définir activeTintColor, inactiveTintColor, et d'autres styles de la barre d'onglets. 
Les options définies dans screenOptions s'appliquent à tous les écrans du navigateur, mais peuvent être écrasées par des options spécifiques sur chaque écran via la prop options.

activeTintColor et inactiveTintColor sont des propriétés utilisées avec Tab.Navigator, pour personnaliser les couleurs des icônes et du texte des onglets. 
activeTintColor définit la couleur des icônes et du texte de l'onglet actuellement sélectionné, tandis que inactiveTintColor définit la couleur des icônes et du texte des onglets non sélectionnés. 
Ces propriétés vous permettent de renforcer visuellement l'onglet actif pour l'utilisateur.

Changement de Couleurs: 
    Modifiez les couleurs active et inactive des onglets et du texte.

    import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/components/HomeScreen";
import SettingsScreen from "./src/components/SettingsScreen";
import Icon from "react-native-vector-icons/FontAwesome";

// Création d'un BottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Conteneur de navigation pour l'ensemble de l'application
    <NavigationContainer>
      {/* Navigator pour les onglets inférieurs /}
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: "blue", // Couleur active des icônes et du texte
          tabBarInactiveTintColor: "gray", // Couleur inactive des icônes et du texte
        })}
      >
        {/* Premier onglet pour l'écran d'accueil /}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // Icône pour l'onglet Accueil
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        {/* Deuxième onglet pour l'écran des paramètres /}
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            // Icône pour l'onglet Paramètres
            tabBarIcon: ({ color, size }) => (
              <Icon name="cog" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});


    ////////////////////////



Animation des Onglets: Implémentez une animation simple lors du changement d'onglet.


Notifications dans l'Onglet: Ajoutez un badge de notification sur un onglet pour simuler des alertes non lues.
*/
