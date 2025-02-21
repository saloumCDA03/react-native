/*
Gestion des 404 avec +not-found.jsx :
On peut gérer les erreurs 404 en créant une route spéciale nommée +not-found.tsx. 
Cette route attrape toutes les URL non reconnues à partir d'un niveau imbriqué


Exercice 11 : 

Créer une page d'erreur locale pour un groupe de routes
Objectif :
Dans ce projet, vous allez créer un groupe de routes pour le blog et définir une page d'erreur personnalisée pour ce groupe. 
Lorsque l'utilisateur naviguera vers une route introuvée dans ce groupe, la page d'erreur s'affichera.


--
Créez la page d'erreur locale :
Dans le même dossier app/blog/, créez un fichier nommé +not-found.js. Ce fichier sera utilisé pour afficher une page d'erreur lorsque l'URL demandée dans le groupe blog n'existe pas.
--
import { Text, View } from 'react-native';

export default function BlogNotFound() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, color: 'red' }}>
        404 - Article non trouvé
      </Text>
    </View>
  );
}
--  

*/