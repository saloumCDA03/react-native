/*
 les query parameters (ou paramètres de requête) offrent une manière flexible de passer des informations supplémentaires dans l'URL pour adapter le contenu affiché sans modifier la route principale.

ce sont des paires clé/valeur ajoutées à la fin d'une URL après un point d'interrogation (?). 
Par exemple, dans l'URL https://exemple.com/page?foo=bar&baz=qux, foo et baz sont des clés avec les valeurs bar et qux respectivement.

Ces paramètres permettent de transmettre des informations supplémentaires à une page sans changer la structure de la route. 
Ils sont souvent utilisés pour filtrer, trier ou personnaliser l'affichage d'une page en fonction des données fournies.

vous pouvez récupérer ces query parameters à l'aide d'un hook comme useLocalSearchParams, 
qui extrait à la fois les paramètres dynamiques (issus des segments d'URL) et les query parameters.

Exercice 10 : Utiliser des query parameters dans une route
Objectif : Créer une page qui lit les paramètres de recherche depuis l'URL.

Instruction :
Crée le fichier app/search.js :


import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function SearchPage() {
  const params = useLocalSearchParams();
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Paramètres de recherche :</Text>
      <Text>{JSON.stringify(params)}</Text>
    </View>
  );
}
Réponse :
Accéder à /search?query=expo affichera les paramètres sous forme de JSON.

Exercice 11 : Créer une page d'erreur 404
Objectif : Créer une page personnalisée pour les routes non trouvées.

Instruction :
Crée le fichier app/404.js :


import { Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, color: 'red' }}>404 - Page non trouvée</Text>
    </View>
  );
}
Réponse :
Expo Router utilisera cette page pour les routes qui n'existent pas.

Exercice 12 : Créer un composant Header réutilisable
Objectif : Créer un composant Header dans un dossier séparé.

Instruction :
Crée le fichier components/Header.js :


import React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={{ padding: 10, backgroundColor: '#eee' }}>
      <Text style={{ fontSize: 20 }}>Mon Header</Text>
    </View>
  );
}
Réponse :
Le composant Header pourra être importé et utilisé dans différentes pages ou dans le layout.

Exercice 13 : Utiliser le composant Button personnalisé
Objectif : Créer un composant Button dans le dossier components/ et l'utiliser dans une page.

Instruction :

Crée le fichier components/Button.js :

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5 }}>
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
}
Utilise-le dans app/index.js :

import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import Button from '../components/Button';

export default function HomePage() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Bienvenue sur l'Accueil !</Text>
      <Button title="Aller à la page À propos" onPress={() => {}} />
      <Link href="/profile/123" style={{ marginTop: 20, color: 'blue' }}>
        Voir le profil 123
      </Link>
    </View>
  );
}
Réponse :
Le composant Button personnalisé est maintenant réutilisable dans ton projet.

Exercice 14 : Créer une route avec une liste d'items et navigation vers le détail
Objectif : Créer une page listant des items et naviguer vers une page de détail pour chaque item.

Instruction :

Crée le fichier app/items/index.js :

import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function ItemsList() {
  const items = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Liste des items :</Text>
      {items.map((item) => (
        <Link key={item.id} href={`/items/${item.id}`} style={{ marginBottom: 10, color: 'blue' }}>
          {item.name}
        </Link>
      ))}
    </View>
  );
}
Crée le fichier app/items/[itemId].js :

import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ItemDetail() {
  const { itemId } = useLocalSearchParams();
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Détail de l'item {itemId}</Text>
    </View>
  );
}
Réponse :
Chaque item de la liste mène à une page de détail basée sur l'ID de l'item.

Exercice 15 : Ajouter un lien avec des query parameters
Objectif : Naviguer vers une page en passant des paramètres dans l'URL.

Instruction :
Modifie app/index.js pour ajouter un lien vers /search?query=expo :


import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomePage() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Bienvenue sur l'Accueil !</Text>
      <Link href="/search?query=expo" style={{ marginTop: 20, color: 'blue' }}>
        Rechercher "expo"
      </Link>
    </View>
  );
}
Réponse :
La navigation se fera vers la page /search avec le paramètre de recherche query=expo.

Exercice 16 : Créer un hook personnalisé et l'utiliser dans une page
Objectif : Créer un hook simple dans le dossier components/ et l'utiliser dans une page.

Instruction :

Crée le fichier components/useCustomHook.js :

import { useState, useEffect } from 'react';

export default function useCustomHook() {
  const [message, setMessage] = useState('Chargement...');
  useEffect(() => {
    setTimeout(() => {
      setMessage('Hook personnalisé fonctionnel !');
    }, 1000);
  }, []);
  return message;
}
Utilise ce hook dans une page (par exemple, app/custom.js) :

import { Text, View } from 'react-native';
import useCustomHook from '../components/useCustomHook';

export default function CustomPage() {
  const message = useCustomHook();
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>{message}</Text>
    </View>
  );
}
Réponse :
La page affichera « Chargement... » puis « Hook personnalisé fonctionnel ! » après 1 seconde.

Exercice 17 : Créer un layout imbriqué (nested layout)
Objectif : Organiser des routes avec un layout spécifique pour un groupe de pages.

Instruction :

Crée un dossier app/dashboard/
Dans app/dashboard/_layout.js :

import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function DashboardLayout({ children }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ padding: 10, backgroundColor: '#ccc' }}>Dashboard Header</Text>
      <Stack>{children}</Stack>
    </View>
  );
}
Crée une page dans app/dashboard/home.js :

import { Text, View } from 'react-native';

export default function DashboardHome() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Bienvenue dans le Dashboard</Text>
    </View>
  );
}
Réponse :
Les pages sous le dossier dashboard utiliseront le layout défini dans _layout.js.

Exercice 18 : Créer des routes de groupe (grouped routes)
Objectif : Regrouper des pages liées sans affecter l’URL.

Instruction :
Crée un dossier nommé par exemple (auth) dans app/ (les dossiers entre parenthèses sont ignorés dans l’URL) et ajoute :

app/(auth)/login.js :

import { Text, View } from 'react-native';

export default function LoginPage() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Page de connexion</Text>
    </View>
  );
}
app/(auth)/register.js :

import { Text, View } from 'react-native';

export default function RegisterPage() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Page d'inscription</Text>
    </View>
  );
}
Réponse :
Les pages login et register apparaîtront respectivement aux URLs /login et /register, sans inclure le dossier (auth).

Exercice 19 : Créer une route avec des extensions spécifiques à la plateforme
Objectif : Définir des comportements différents sur le Web et sur Mobile.

Instruction :
Crée dans app/platform/ deux fichiers :

index.js pour la version mobile.
index.web.js pour la version web.
Par exemple, app/platform/index.js :


import { Text, View } from 'react-native';

export default function PlatformPage() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Page mobile</Text>
    </View>
  );
}
Et app/platform/index.web.js :


import { Text, View } from 'react-native';

export default function PlatformPageWeb() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Page Web</Text>
    </View>
  );
}
Réponse :
Selon la plateforme, Expo Router affichera la version appropriée.

Exercice 20 : Navigation conditionnelle
Objectif : Afficher un lien seulement si une condition est remplie (ex. utilisateur connecté).

Instruction :
Modifie app/index.js :


import { useState } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Bienvenue sur l'Accueil !</Text>
      {isLoggedIn ? (
        <Link href="/profile/123" style={{ marginTop: 20, color: 'blue' }}>
          Voir votre profil
        </Link>
      ) : (
        <Text style={{ marginTop: 20 }}>Veuillez vous connecter.</Text>
      )}
    </View>
  );
}
Réponse :
Le lien vers le profil n'apparaîtra que si isLoggedIn est vrai.

Exercice 21 : Utiliser useFocusEffect pour détecter l'affichage d'une page
Objectif : Exécuter une action chaque fois qu'une page devient active.

Instruction :
Dans app/index.js, utilise le hook useFocusEffect :


import { useFocusEffect } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useCallback } from 'react';

export default function HomePage() {
  useFocusEffect(
    useCallback(() => {
      console.log('La page d\'accueil est affichée');
    }, [])
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>Bienvenue sur l'Accueil !</Text>
    </View>
  );
}
Réponse :
Un message sera loggé à chaque fois que la page d'accueil devient active.

Exercice 22 : Implémenter un chargement différé (lazy loading)
Objectif : Charger dynamiquement une page pour améliorer les performances.

Instruction :
Crée un fichier app/lazy.js et utilise React.lazy (note : pour des exemples simples, l'import dynamique fonctionne de façon similaire) :


import React, { Suspense } from 'react';
import { Text, View } from 'react-native';

const LazyComponent = React.lazy(() => import('../components/HeavyComponent'));

export default function LazyPage() {
  return (
    <Suspense fallback={<Text>Chargement...</Text>}>
      <LazyComponent />
    </Suspense>
  );
}
Crée aussi components/HeavyComponent.js :


import { Text, View } from 'react-native';

export default function HeavyComponent() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Contenu lourd chargé dynamiquement.</Text>
    </View>
  );
}
Réponse :
La page affichera « Chargement... » pendant le chargement du composant lourd.

Exercice 23 : Créer une route qui simule le chargement de données
Objectif : Afficher un loader pendant le chargement de données simulées.

Instruction :
Crée le fichier app/data.js :


import { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

export default function DataPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Données chargées avec succès !' });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={{ padding: 20 }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>{data.message}</Text>
    </View>
  );
}
Réponse :
La page affiche un loader pendant 2 secondes puis affiche les données.

Exercice 24 : Gérer une erreur lors du chargement de données
Objectif : Simuler une erreur dans l'API et l'afficher.

Instruction :
Crée le fichier app/error.js :


import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export default function ErrorPage() {
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulation d'une erreur
    setTimeout(() => {
      setError('Erreur lors du chargement des données.');
    }, 1500);
  }, []);

  if (error) {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Données chargées correctement.</Text>
    </View>
  );
}
Réponse :
Après 1,5 seconde, la page affichera un message d'erreur.

Exercice 25 : Appliquer des styles personnalisés avec StyleSheet
Objectif : Utiliser StyleSheet pour styliser une page.

Instruction :
Crée le fichier app/styled.js :


import { StyleSheet, Text, View } from 'react-native';

export default function StyledPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page avec styles personnalisés</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0'
  },
  title: {
    fontSize: 24,
    color: '#333'
  }
});
Réponse :
La page affichera le texte avec les styles définis dans le StyleSheet.

Exercice 26 : Créer une route modale
Objectif : Créer une page qui se comporte comme une modal.

Instruction :
Crée le fichier app/modal.js :


import { Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ModalPage() {
  const router = useRouter();

  return (
    <View style={{ padding: 20, backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center' }}>
      <View style={{ backgroundColor: 'white', padding: 20 }}>
        <Text style={{ fontSize: 18 }}>Ceci est une modal</Text>
        <Button title="Fermer" onPress={() => router.back()} />
      </View>
    </View>
  );
}
Réponse :
En naviguant vers /modal, la page s'affichera comme une modal avec la possibilité de fermer (retour arrière).

Exercice 27 : Créer une page utilisant un contexte React
Objectif : Partager des données globalement via un Context.

Instruction :

Crée le fichier components/AppContext.js :

import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState({ name: 'Alice' });
  return <AppContext.Provider value={{ user, setUser }}>{children}</AppContext.Provider>;
}
Intègre le contexte dans le layout (par exemple dans app/_layout.js) :

import { Stack } from 'expo-router';
import { AppProvider } from '../components/AppContext';

export default function Layout() {
  return (
    <AppProvider>
      <Stack>
        </Stack >
        </AppProvider >
      );
    }
    Utilise le contexte dans une page, par exemple app / profile / [id].js :
jsx
Copier
import { useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { AppContext } from '../../components/AppContext';

export default function ProfilePage() {
  const { id } = useLocalSearchParams();
  const { user } = useContext(AppContext);

  return (
    <View style={{ padding: 20 }}>
      <Text>Profil de l'utilisateur {id}</Text>
      <Text>Nom de l'utilisateur connecté : {user.name}</Text>
    </View>
  );
}
Réponse:
    Le contexte permet de partager des données(ici le nom de l'utilisateur) entre différentes pages.
    
    Exercice 28 : Créer une route affichant une animation simple
    Objectif : Utiliser Animated de React Native pour une animation.

  Instruction :
  Crée le fichier app / animated.js :

  jsx
    Copier
    import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

export default function AnimatedPage() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ padding: 20, opacity: fadeAnim }}>
      <Text style={{ fontSize: 18 }}>Texte qui apparaît en fondu</Text>
    </Animated.View>
  );
}
Réponse:
    Le texte apparaîtra progressivement grâce à l'animation de fondu.
    
    Exercice 29 : Créer une route avec navigation imbriquée
Objectif: Utiliser des layouts imbriqués pour une navigation plus complexe.

  Instruction :
    Crée un dossier app / shop / et dans ce dossier:
    
    Crée _layout.js pour définir le layout du shop.
    Crée index.js pour la page principale du shop.
  Crée[productId].js pour la page de détail d'un produit.
    Exemple pour app / shop / _layout.js :

jsx
Copier
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function ShopLayout({ children }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ padding: 10, backgroundColor: '#ddd' }}>Boutique</Text>
      <Stack>{children}</Stack>
    </View>
  );
}
Puis, dans app / shop / index.js :

jsx
Copier
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function ShopHome() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Bienvenue dans la boutique</Text>
      <Link href="/shop/42" style={{ marginTop: 20, color: 'blue' }}>
        Voir le produit 42
      </Link>
    </View>
  );
}
    Et dans app / shop / [productId].js :

jsx
Copier
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProductDetail() {
  const { productId } = useLocalSearchParams();
  return (
    <View style={{ padding: 20 }}>
      <Text>Détails du produit {productId}</Text>
    </View>
  );
}
Réponse:
    La navigation imbriquée dans le dossier shop permet de gérer la boutique avec son propre layout.

  Exercice 30 : Créer une route affichant un message d'erreur avec gestion d'exception
Objectif: Gérer les erreurs dans une route et afficher un message en cas de problème.

  Instruction :
    Crée le fichier app / exception.js :

jsx
Copier
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export default function ExceptionPage() {
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simuler une opération qui lance une exception
      throw new Error("Une erreur est survenue !");
    } catch (err) {
      setError(err.message);
    }
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {error ? <Text style={{ color: 'red' }}>Erreur : {error}</Text> : <Text>Aucune erreur</Text>}
    </View>
  );
}
Réponse:
    La page affiche le message d'erreur capturé.


  */