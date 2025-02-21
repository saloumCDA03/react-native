/*
 Expo Router
 ===========
 Expo Router est une bibliothèque qui permet d'utiliser un système de navigation basé sur les fichiers dans une application React Native.

 📌 Chaque fichier dans le dossier app/ devient une route automatiquement.

 - Plus simple que react-navigation (pas besoin d'utiliser Stack.Navigator manuellement).
 - Compatible avec iOS et Android.

 2️⃣ Installation et Création du Projet
 ---------------------------------------
 Dans les versions récentes, Expo Router est inclus par défaut lors de la création d'un nouveau projet avec Expo. 
 Pour créer un projet déjà configuré avec Expo Router, exécutez :

     npx create-expo-app my-router-app
     cd my-router-app

 Vérifiez ensuite dans le fichier package.json que la configuration suivante est présente :

 {
   "main": "expo-router/entry"
 }

 📌 Cela permet à Expo Router d’être le point d’entrée principal.

 3️⃣ Structure d'un projet avec Expo Router :

 my-router-app/
 ├── app/              // 📌 Tous les fichiers ici deviennent des routes
 │   ├── index.js      // Page d'accueil `/`
 │   ├── about.js      // Page "À propos" `/about`
 │   ├── profile/
 │   │   ├── index.js  // Page de profil `/profile`
 │   │   ├── [id].js   // Page dynamique `/profile/:id`
 │   ├── _layout.js    // Mise en page globale (barre de navigation commune)
 ├── components/       // 📌 Composants réutilisables (ne pas placer ici des fichiers route)
 │   ├── Header.js
 │   ├── Button.js
 ├── package.json
 ├── app.json

 
 4️⃣ Création des Pages 📄
 --------------------------
 
 Page d'Accueil (app/index.js) 
 -----------------------------
 import { Text, View } from 'react-native';

 export default function HomePage() {
   return (
     <View>
       <Text>Bienvenue sur l'Accueil !</Text>
     </View>
   );
 }

 📌 Correspond à la route `/` dans l'application et dans le navigateur.
 
 Page "À propos" (app/about.js)
 ------------------------------
 import { Text, View } from 'react-native';

 export default function AboutPage() {
   return (
     <View>
       <Text>À propos de cette app</Text>
     </View>
   );
 }

 📌 Correspond à la route `/about`.

 5️⃣ Ajout de la Navigation
 ---------------------------
 
 Mise en page globale (app/_layout.js)
 -------------------------------------
Le fichier _layout.js (situé dans le dossier app/) est utilisé pour définir une mise en page globale qui sera partagée par toutes les pages (routes) de l'application.

Navigation Commune :
Il permet de définir des éléments communs à toutes les pages, 
par exemple une barre de navigation (ou header, footer, etc.) 
qui restera inchangée lors de la navigation entre les routes.

Enveloppement Automatique :
Expo Router détecte automatiquement la présence de ce fichier et enveloppe toutes les pages (ou routes) définies dans app/ avec ce layout.
Cela garantit une cohérence visuelle et fonctionnelle sans avoir à dupliquer le code dans chaque page.



 import { Stack } from 'expo-router';

 export default function Layout() {
   return (
     <Stack>
       <Stack.Screen name="index" options={{ title: "Accueil" }} />
       <Stack.Screen name="about" options={{ title: "À propos" }} />
     </Stack>
   );
 }

 📌 Cela crée une navigation en haut de l’écran, similaire à Stack.Navigator mais configurée automatiquement par Expo Router.

 6️⃣ Routes Dynamiques (Profils d'utilisateur)
 ----------------------------------------------
 
Les routes dynamiques permettent de créer des pages dont le contenu dépend de paramètres variables dans l'URL.
Pour créer une route dynamique, nommez le fichier avec des crochets, par exemple [id].js, dans le dossier app/.
Expo Router interprétera ce fichier comme une route dynamique et extraira la valeur du paramètre depuis l'URL.

Vous pouvez accéder à cette valeur dans votre composant grâce au hook useLocalSearchParams().
Le hook useLocalSearchParams d'Expo Router permet d'accéder facilement aux paramètres dynamiques de l'URL dans vos composants. Par exemple, dans un fichier nommé [id].js, vous pouvez récupérer l'ID en écrivant const { id } = useLocalSearchParams(). 
Cela simplifie grandement la création de routes dynamiques en évitant de parser manuellement l'URL.

Cette approche permet de générer des pages personnalisées, par exemple pour afficher des profils ou des articles en fonction de l'ID passé dans l'URL.



 Créer une route dynamique (app/profile/[id].js)

 import { useLocalSearchParams } from 'expo-router';
 import { Text, View } from 'react-native';

 export default function ProfilePage() {
   const { id } = useLocalSearchParams(); // Récupère le paramètre de l'URL

   return (
     <View>
       <Text>Profil de l'utilisateur {id}</Text>
     </View>
   );
 }

 📌 Correspond à la route `/profile/:id`. Par exemple, `/profile/42` affichera "Profil de l'utilisateur 42".

 7️⃣ Lien entre les pages 📎
 ----------------------------
 
 Expo Router utilise le composant Link pour naviguer entre les pages.

 Ajouter des liens dans app/index.js :

 import { Text, View } from 'react-native';
 import { Link } from 'expo-router';

 export default function HomePage() {
   return (
     <View>
       <Text>Bienvenue sur l'Accueil !</Text>
       <Link href="/about">Aller à la page À propos</Link>
       <Link href="/profile/123">Voir le profil 123</Link>
     </View>
   );
 }

 ✅ Avantages de Link :
   - Fonctionne sur Web et Mobile 🎉
   - Meilleure performance que l'utilisation directe de navigation.navigate()

 8️⃣ Lancer l’application 🚀
 ----------------------------
 
 Dans le terminal, lancez :
     npx expo start

 📌 Tester sur différentes plateformes :
   - Appuyez sur **w** pour ouvrir sur le Web.
   - Appuyez sur **a** pour tester sur Android (Android Studio requis).
   - Appuyez sur **i** pour tester sur iOS (macOS et Xcode requis).

 9️⃣ Ajouter un support Web 🌍
 ------------------------------
 
 Pour activer le support Web, installez les dépendances suivantes (si elles ne sont pas déjà présentes) :
     npx expo install react-native-web react-dom

 Puis, modifiez le fichier app.json pour ajouter :
 
 {
   "web": {
     "bundler": "metro"
   }
 }

-----------
Gestion des 404 avec +not-found.jsx :
On peut gérer les erreurs 404 en créant une route spéciale nommée +not-found.tsx. 
Cette route attrape toutes les URL non reconnues à partir d'un niveau imbriqué





















 ✅ Expo Router permet d’avoir une seule base de code pour iOS, Android et Web !

 🔍 Récapitulatif
 ---------------
 
 💡 Concept               | ✅ Explication
 -------------------------|---------------------------------------
 Installation             | npx create-expo-app my-router-app (Expo Router est inclus automatiquement)
 Fichiers = Routes        | Un fichier .js dans app/ devient automatiquement une page
 Navigation               | _layout.js crée une navigation automatique
 Routes dynamiques        | app/profile/[id].js correspond à /profile/42
 Liens entre pages        | <Link href="/about">Aller à propos</Link>
 Support Web              | npx expo install react-native-web react-dom

 🎯 Pourquoi choisir Expo Router ?
   - ✅ Simple : Plus facile à utiliser que react-navigation.
   - ✅ Performant : Moins de code pour une navigation fluide.
   - ✅ Universel : Fonctionne sur iOS, Android et Web sans modifications majeures.

 💡 Avec Expo Router, vous gagnez du temps et votre code devient plus propre et mieux structuré ! 🚀
*/
