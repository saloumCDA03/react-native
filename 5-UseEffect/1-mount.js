/*
Exercice 1: Affichage Simple avec useEffect
Créez un composant qui utilise useEffect pour afficher un message dans la console lorsque le composant est monté.


import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const AffichageSimple = () => {
  useEffect(() => {
    console.log('Le composant est monté !');
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois, juste après le montage du composant

  return (
    <View>
      <Text>Bonjour, vérifiez la console !</Text>
    </View>
  );
};

export default AffichageSimple;

*/
