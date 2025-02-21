/* 
Par convention, les fichiers qui représentent des routes dans le dossier app/ sont généralement nommés en minuscules. 
Cela permet de :
Aligner le nom de la route avec l'URL (les URLs étant habituellement en minuscules).
Éviter des incohérences entre le nom du fichier et la manière dont Expo Router génère les routes.

Exercice 2 : Créer la page d'accueil
Objectif : Créer une page d'accueil accessible à l'URL /.

Instruction :
Crée le fichier app/index.js avec le contenu suivant :


import { Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Bienvenue sur l'Accueil !</Text>
    </View>
  );
}

La page d'accueil est maintenant accessible via la route /.

///////////

 Créer une page "À propos" accessible à l'URL /about.


import { Text, View } from 'react-native';

export default function AboutPage() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>À propos de cette app</Text>
    </View>
  );
}

--------------

`Link` est un composant fourni par **Expo Router** utilisé pour effectuer la navigation entre les pages de l'application. 
Il remplace l'usage de `navigation.navigate()` pour effectuer des transitions transversales entre les routes définies dans le dossier `app/`. 
Pour l'utiliser, il suffit de fournir une URL cible via la propriété `href` du composant `<Link href="/path">`. 

ajouter un link vers about dans index  .
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomePage() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Bienvenue sur l'Accueil !</Text>
      <Link href="/about" style={{ marginTop: 20, color: 'blue' }}>
        Aller à la page À propos
      </Link>
    </View>
  );
}

*/