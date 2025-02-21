/*
******Partie 1:  useEffect
useEffect est un Hook dans React (et donc dans React Native) qui vous permet d'effectuer des effets secondaires dans votre composant fonctionnel.
Les effets secondaires peuvent être des appels API, des modifications manuelles du DOM, des abonnements, etc.

****** Syntaxe de base:
useEffect(() => {
  // Votre code ici
}, [dependencies]);
La première partie est une fonction qui contient le code de votre effet.
La deuxième partie est un tableau de dépendances. 
L'effet s'exécutera à nouveau chaque fois qu'une variable dans ce tableau change.
** Exemple:
useEffect(() => {
  console.log("Le composant a été monté ou mis à jour");
}, []);
Dans cet exemple, l'effet s'exécutera une seule fois lorsque le composant sera monté car le tableau de dépendances est vide.

**********Partie 2: Gérer les Erreurs avec try...catch
try...catch est une structure de contrôle en JavaScript qui vous permet de gérer les erreurs de manière élégante. 
Vous mettez le code qui pourrait échouer dans le bloc try, et le code à exécuter en cas d'erreur dans le bloc catch.

Syntaxe de base:
try {
  // Code qui pourrait échouer
} catch (error) {
  // Code à exécuter en cas d'erreur
}

**********Partie 3: Utiliser useEffect et try...catch Ensemble
Vous pouvez combiner useEffect et try...catch pour gérer les appels API de manière efficace.
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const MonComposant = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.exemple.com/data');
        setData(response.data);
      } catch (err) {
        setError('Une erreur est survenue');
        console.error(err);
      }
    };

    fetchData();
  }, []); // L'effet s'exécutera une seule fois

  if (error) return <Text>{error}</Text>;
  if (!data) return <Text>Chargement...</Text>;

  return (
    <View>
      <Text>{data.nom}</Text>
    </View>
  );
};
Dans cet exemple, nous utilisons useEffect pour appeler une fonction fetchData qui récupère des données d'une API. 
Si l'appel API réussit, nous mettons à jour l'état data. 
Si l'appel API échoue, nous mettons à jour l'état error. 
Ensuite, nous utilisons ces états pour déterminer ce qui doit être affiché à l'écran.

Conclusion
En combinant useEffect et try...catch, vous pouvez créer des composants React Native robustes qui gèrent les appels API et les erreurs de manière élégante. 
*/
