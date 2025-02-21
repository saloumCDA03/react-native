/*
Exercice 3: Nettoyage avec useEffect
Créez un composant qui utilise useEffect pour définir un intervalle qui incrémente un compteur chaque seconde. Assurez-vous de nettoyer l'intervalle lorsque le composant est démonté.
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const CompteurAuto = () => {
  const [compteur, setCompteur] = useState(0);

  useEffect(() => {
    // Définir un intervalle qui incrémente le compteur chaque seconde
    const intervalId = setInterval(() => {
      setCompteur(compteur => compteur + 1);
    }, 1000);

    // Fonction de nettoyage pour arrêter l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois, juste après le montage du composant

  return (
    <View>
      <Text>Compteur: {compteur}</Text>
    </View>
  );
};

export default CompteurAuto;

*/
