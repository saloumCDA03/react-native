/*
***************Gestion du Bouton de Retour**************

Le bouton de retour est un élément crucial dans la navigation des applications mobiles.
Il permet aux utilisateurs de revenir à l'écran précédent, créant ainsi une expérience utilisateur fluide et intuitive. 
Dans React Navigation, la gestion du bouton de retour est simplifiée et offre plusieurs options de personnalisation.

Comportement par Défaut:
    Par défaut, React Navigation gère automatiquement le bouton de retour sur les appareils Android. 
    Lorsque vous naviguez d'un écran à un autre, un bouton de retour apparaît automatiquement dans la barre de navigation supérieure. 
    Si vous appuyez sur le bouton de retour matériel sur un appareil Android, React Navigation imitera également le comportement du bouton de retour.

Personnalisation du Bouton de Retour
    Bien que le comportement par défaut soit souvent suffisant, 
    vous pouvez avoir besoin de personnaliser le bouton de retour pour mieux répondre aux besoins de votre application.

Modification de l'Apparence
    Vous pouvez modifier l'apparence du bouton de retour en utilisant les options de navigation. 
    Par exemple, vous pouvez changer le titre, la couleur ou même masquer complètement le bouton de retour.    
    <Stack.Screen
        name="Details" // Le nom de la route, utilisé pour naviguer vers cet écran
        component={DetailsScreen} // Le composant à afficher pour cet écran
        options={{
            headerBackTitle: "Retour", // Le texte du bouton de retour dans la barre de navigation (iOS uniquement)
            headerBackTitleStyle: { color: 'red' }, // Le style appliqué au texte du bouton de retour
            headerTruncatedBackTitle: "Retour...", // Le texte à afficher si le titre du bouton de retour est trop long et doit être tronqué (iOS uniquement)
            headerBackVisible: false, // Si false, le bouton de retour est masqué (utile si vous souhaitez un écran sans bouton de retour)
        }}
    />
Fonction de Retour
    Si vous devez changer le comportement par défaut du bouton de retour, vous pouvez utiliser le hook useNavigation pour accéder à la fonction goBack.
        const navigation = useNavigation();
        const handleBackPress = () => {
        // Votre logique ici
        navigation.goBack();
        };
    Vous pouvez ensuite utiliser cette fonction pour un bouton personnalisé 

*/

/************* exercice ***********************************
Créez SettingsScreen et masquez le bouton de retour
Ajoutez des boutons pour naviguer entre les 3 écrans.


*/
/*******SettingsScreen 
 import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go to Detail"
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

export default SettingsScreen;

 */

/******Dans votre Stack Navigator, ajoutez SettingsScreen et masquez le bouton de retour
<Stack.Screen
  name="Settings"
  component={SettingsScreen}
  options={{ headerShown: false }}
/>

 */
/***********Ajoutez des boutons pour naviguer entre les 3 écrans.

 <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        onPress={() => {
          navigation.navigate("Profile", { message: "Hello from HomeScreen!" });
        }}
      <Button
        onPress={() => {
          navigation.navigate("Profile", { message: "Hello from Setting!" });
        }}
        title="go to profile"
      />
 */
