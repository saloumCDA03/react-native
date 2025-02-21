/*
 5️⃣ Ajout de la Navigation
 ---------------------------
 
 Mise en page globale (app/_layout.js)
 -------------------------------------
Le fichier _layout.js (situé dans le dossier app/) 
est utilisé pour définir une mise en page globale qui sera partagée 
par toutes les pages (routes) de l'application.

Navigation Commune :
Il permet de définir des éléments communs à toutes les pages,
par exemple une barre de navigation (ou header, footer, etc.) 
qui restera inchangée lors de la navigation entre les routes.

Enveloppement Automatique :
Expo Router détecte automatiquement la présence de ce fichier et enveloppe 
toutes les pages (ou routes) définies dans app/ avec ce layout.
Cela garantit une cohérence visuelle et fonctionnelle 
sans avoir à dupliquer le code dans chaque page.

Vous pouvez y importer et utiliser un composant de navigation (comme Stack ou Tabs) pour définir le comportement de la navigation entre vos écrans.



Exercice 3 : Créer un layout global
Objectif : Définir une navigation globale avec un layout commun à toutes les pages.

Instruction :
Crée le fichier app/_layout.jsx avec le contenu suivant :

import { Stack } from "expo-router";
import { View, Text } from "react-native";

// Ce composant définit le layout global de l'application.
// Il inclut un header commun et une navigation par pile (Stack) pour gérer les différentes routes.
export default function Layout() {
  return (
    // Le conteneur principal qui englobe l'ensemble du layout.
    <View style={{ flex: 1 }}>
       
      <View style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Mon Application
        </Text>
      </View>
      
      <Stack>
        <Stack.Screen name="index" options={{ title: "Accueil" }} />
        <Stack.Screen name="about" options={{ title: "À propos" }} />
      </Stack>
      
    </View>
  );
}

Réponse :
Toutes les pages définies dans le dossier app/ bénéficieront de ce layout 

*/