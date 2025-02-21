/**
 
Lancez un projet nommé "todolist". Organisez-le avec un répertoire "src" qui inclut les sous-répertoires "components" et "screens". 
Dans "components", créez un dossier "Header" contenant un fichier "index.js". 
Dans ce fichier, concevez un composant "Header" qui affiche la date actuelle.

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
    backgroundColor: "#4CAF50",
    padding: 15,
    alignItems: "center",
  },
  texteHeader: {
    color: "white",
    fontSize: 18,
  },
});

export default Header;



------------2-----------
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("fr-FR", options);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#4CAF50",
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
});

export default Header;

-----
-----
-----
const date = new Date();

Cette ligne crée un nouvel objet Date qui représente la date et l'heure actuelles.
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

Ici, nous définissons un objet options qui spécifie comment nous voulons formater notre date. Les propriétés de cet objet déterminent les composants de la date à afficher et comment les afficher :
weekday: 'long' : Cela signifie que nous voulons afficher le jour de la semaine en format long (par exemple, "lundi" plutôt que "lun.").
year: 'numeric' : Cela signifie que nous voulons afficher l'année en format numérique (par exemple, "2023").
month: 'long' : Cela signifie que nous voulons afficher le mois en format long (par exemple, "janvier" plutôt que "janv.").
day: 'numeric' : Cela signifie que nous voulons afficher le jour du mois en format numérique (par exemple, "29").
const formattedDate = date.toLocaleDateString('fr-FR', options);

La méthode toLocaleDateString() est utilisée pour formater la date en une chaîne de caractères selon une locale (dans ce cas, 'fr-FR' pour le français de France) et les options de formatage que nous avons définies précédemment.
Le résultat est une date formatée qui pourrait ressembler à quelque chose comme : "vendredi 29 janvier 2023".

 */
