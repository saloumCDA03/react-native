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

*/