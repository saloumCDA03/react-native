/*
Exercice 2: Mise à Jour d'État avec useEffect
Créez un composant qui utilise useEffect pour mettre à jour un état après 5 secondes. Affichez l'état dans le composant.


import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MiseAJourEtat = () => {
  const [etat, setEtat] = useState('En attente...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setEtat('Mise à jour effectuée !');
    }, 5000); // Mise à jour de l'état après 5 secondes (5000 millisecondes)

    return () => clearTimeout(timer); // Nettoyage du timer lors du démontage du composant
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois, juste après le montage du composant

  return (
    <View>
      <Text>{etat}</Text>
    </View>
  );
};

export default MiseAJourEtat;

*/
