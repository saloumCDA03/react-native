/*
Navigation Dynamique
Ajoutez un bouton dans DetailsScreen pour naviguer de nouveau vers DetailsScreen, 
mais avec des paramètres différents.
Affichez les nouveaux paramètres passés.
*/

/**DetailsScreen
 import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
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
