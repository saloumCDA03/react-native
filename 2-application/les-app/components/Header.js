
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = () => {
  const dateActuelle = new Date(Date.now());

  const jours = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const nomDuJour = jours[dateActuelle.getDay()];
  const nomDuMois = mois[dateActuelle.getMonth()];

  const numeroDuJour = dateActuelle.getDate();
  const annee = dateActuelle.getFullYear();

  return (
    <View style={styles.conteneurHeader}>
      <Text style={styles.texteHeader}>
        {nomDuJour} {numeroDuJour} {nomDuMois} {annee}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteneurHeader: {
    backgroundColor: "#2b372c",
    padding: 15,
    alignItems: "center",
  },
  texteHeader: {
    color: "white",
    fontSize: 22,
  },
});

export default Header;