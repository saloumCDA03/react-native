/*
https://icons.expo.fyi/Index

Groupe d'onglets (tabs):
Le dossier (tabs) regroupe les routes qui doivent être accessibles via une barre d'onglets inférieure.
Le fichier (tabs)/_layout.tsx configure le composant Tabs pour afficher les onglets.


Dans le fichier app/_layout.tsx, on définit le layout global de l'application en utilisant un navigateur en pile (Stack) qui intègre le groupe d'onglets. Par exemple :
*/
// import { Stack } from 'expo-router/stack';

// export default function Layout() {
//   return (
//     <Stack>
//       {/* Intègre le groupe d'onglets sans afficher le header */}
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       {/* Route pour gérer les erreurs 404 si aucune route ne correspond */}
//       <Stack.Screen name="+not-found" />
//     </Stack>
//   );
// }
// Ici, le navigateur en pile affiche le groupe (tabs) (les onglets) et gère aussi la page d'erreur globale.


/*
Mise en place du layout des onglets
Dans le dossier (tabs), créez un fichier _layout.tsx pour définir la barre d'onglets à l'aide du composant Tabs :

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
Le composant Tabs configure la barre d'onglets.
Chaque <Tabs.Screen> définit un onglet correspondant à un fichier du dossier (tabs).
Les options permettent de personnaliser le titre et l'icône de chaque onglet (ici, via FontAwesome).

-----------
options les plus utiles que vous pouvez utiliser dans
screenOptions pour personnaliser vos navigateurs (Stack, Tabs, etc.)  :

Pour les navigateurs en pile (Stack) :

headerShown : 
    Affiche ou masque l'en-tête de navigation (par exemple, headerShown: false pour le désactiver).
headerStyle : 
    Personnalise le style du conteneur de l'en-tête (couleur de fond, ombre, etc.).
headerTintColor : 
    Définit la couleur des éléments de l'en-tête (boutons, titre).
headerTitleStyle : 
    Permet de personnaliser la police, la taille, et d'autres styles du titre de l'en-tête.

Pour les navigateurs par onglets (Tabs) :

tabBarActiveTintColor : 
    Couleur du texte ou de l'icône pour l'onglet actif.
tabBarInactiveTintColor : 
    Couleur pour les onglets inactifs.
tabBarStyle : 
    Style global de la barre d'onglets (fond, hauteur, etc.).
tabBarLabelStyle : 
    Style du texte des étiquettes d'onglets (taille, police, marges).
tabBarIcon : 
    Fonction qui retourne un composant d'icône personnalisé pour chaque onglet.
tabBarHideOnKeyboard : 
    Option pour masquer la barre d'onglets lorsque le clavier est affiché.
*/