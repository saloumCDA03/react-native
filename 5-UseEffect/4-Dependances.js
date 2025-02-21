/*
Exercice 4: Dependances de useEffect
Créez un composant avec deux états et un bouton pour mettre à jour un des états. Utilisez useEffect pour afficher un message dans la console chaque fois que l'état mis à jour change.


import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const DependancesUseEffect = () => {
  const [etat1, setEtat1] = useState(0);
  const [etat2, setEtat2] = useState(0);

  useEffect(() => {
    console.log('Etat1 a changé:', etat1);
  }, [etat1]); // Le tableau de dépendances contient etat1, donc le useEffect s'exécutera seulement quand etat1 change

  return (
    <View>
      <Text>Etat 1: {etat1}</Text>
      <Text>Etat 2: {etat2}</Text>
      <Button
        title="Mettre à jour Etat 1"
        onPress={() => setEtat1(etat1 + 1)}
      />
      <Button
        title="Mettre à jour Etat 2"
        onPress={() => setEtat2(etat2 + 1)}
      />
    </View>
  );
};

export default DependancesUseEffect;

*/
