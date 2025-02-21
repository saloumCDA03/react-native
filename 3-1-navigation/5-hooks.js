/*
***************useNavigation et useRoute ************

les hooks useNavigation et useRoute sont des outils puissants qui permettent d'interagir avec le système de navigation et d'accéder aux paramètres de la route actuelle. 
Ces hooks sont essentiels pour créer des applications React Native navigables et interactives.

useNavigation
    useNavigation est un hook qui fournit l'objet de navigation à un composant. 
    Cet objet permet de naviguer entre les écrans, de passer des paramètres, et d'effectuer d'autres actions liées à la navigation.

    Importez le hook :
        import { useNavigation } from '@react-navigation/native';

    Utilisez le hook dans votre composant :
        const navigation = useNavigation();
    
    Naviguez vers un autre écran :
        navigation.navigate('NomDeLEcran');

    Passez des paramètres :
        navigation.navigate('NomDeLEcran', { param1: 'valeur1', param2: 'valeur2' });
    
    Contexte d'utilisation :
        useNavigation peut être utilisé dans n'importe quel composant, y compris les composants d'écran et les composants enfants.
    Avantages : 
        Vous n'avez pas besoin de passer l'objet de navigation manuellement à travers les props, 
        ce qui rend le code plus propre et plus facile à gérer, en particulier pour les composants profondément imbriqués.


useRoute:
    Le hook useRoute est un autre hook fourni par React Navigation, qui permet d'accéder aux propriétés de la route actuelle dans laquelle un composant est rendu. 
    Cela inclut le params de la route, qui peut être utilisé pour passer des données d'un écran à un autre.

Comment utiliser useRoute
    Pour utiliser useRoute, vous devez l'importer depuis @react-navigation/native et l'appeler à l'intérieur d'un composant. Voici un exemple de base :
        
        import { useRoute } from '@react-navigation/native';

        function MyScreenComponent() {
        const route = useRoute();
        
        console.log(route.params); // Accès aux paramètres de la route
        
        return (
            // Le reste de votre composant
        );
        }    

Conclusion
    Les hooks useNavigation et useRoute sont essentiels pour gérer la navigation et l'accès aux paramètres de route dans une application React Native utilisant React Navigation. 
    Ils offrent une manière simple et efficace d'interagir avec le système de navigation et d'améliorer l'expérience utilisateur de votre application.
*/
/***********exercice useNavigation et useRoute**********
Remplacez la prop navigation par le hook useNavigation dans DetailScreen.
Remplacez la prop route par le hook useRoute dans le même écran.
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { message } = route.params;
  const navigateToProfileAgain = () => {
    navigation.navigate("Detail", {
      message: "Nouveau message depuis DetailsScreen!",
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        color="#6B13BD"
        title="Aller à DetailsScreen avec un nouveau message"
        onPress={navigateToProfileAgain}
      />
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
