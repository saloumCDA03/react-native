/**
 Introduction
Dans les applications mobiles, il est courant de naviguer entre différents écrans. 
React Navigation est une bibliothèque populaire dans l'écosystème React Native qui facilite la navigation et la gestion des transitions entre les écrans. 
Un aspect crucial de la navigation est la capacité de passer des données d'un écran à un autre. 

1. Utilisation de la méthode navigate
    Lorsque vous naviguez d'un écran à un autre, vous pouvez passer des paramètres à l'écran de destination en utilisant la méthode navigate du prop navigation. 
    La méthode navigate prend deux arguments : le nom de l'écran de destination et un objet contenant les paramètres à passer.
        navigation.navigate('NomDeLEcran', { param1: valeur1, param2: valeur2 });

2. Accès aux Paramètres dans l'Écran de Destination
    Dans l'écran de destination, vous pouvez accéder aux paramètres passés en utilisant la prop route. 
    La prop route a une propriété params qui contient tous les paramètres passés à cet écran.
        const { param1, param2 } = route.params;
 */

/*

      Exercice: Passage de Paramètres
Modifiez le bouton dans HomeScreen pour passer un paramètre à DetailsScreen.
Dans DetailsScreen, affichez le paramètre passé.

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenue sur l'écran d'accueil!</Text>

      <Button
        color="#6B13BD"
        title="Aller à Détails"
        onPress={() => {
          navigation.navigate("Detail", { message: "Hello from HomeScreen!" });
        }}
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

-------
import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { message } = route.params;
  console.log(message);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>{message}</Text>
      <Button
        color="#6B13BD"
        title="Aller à home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};
export default DetailsScreen;


*/
