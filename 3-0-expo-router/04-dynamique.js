/*

Les routes dynamiques permettent de créer des pages dont le contenu dépend de paramètres variables dans l'URL.
nommez le fichier avec des crochets, par exemple [id].js, dans le dossier app/.
Expo Router interprétera ce fichier comme une route dynamique et extraira la valeur du paramètre depuis l'URL.

Vous pouvez accéder à cette valeur dans votre composant grâce au hook useLocalSearchParams().
Le hook useLocalSearchParams d'Expo Router permet d'accéder facilement aux paramètres dynamiques de l'URL dans vos composants. 
Par exemple, dans un fichier nommé [id].js, vous pouvez récupérer l'ID en écrivant const { id } = useLocalSearchParams(). 
Cela simplifie grandement la création de routes dynamiques en évitant de parser manuellement l'URL.
Cette approche permet de générer des pages personnalisées, par exemple pour afficher des profils ou des articles en fonction de l'ID passé dans l'URL.


Créer une page de profil dynamique accessible via /profile/:id. 

Instruction :
Crée le fichier app/profile/[id].js avec le contenu suivant :


import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProfilePage() { 
  const { id } = useLocalSearchParams(); // Récupère le paramètre dynamique

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Profil de l'utilisateur {id}</Text>
    </View>
  );
}

La page affichera l'ID passé dans l'URL (par exemple, /profile/42).

------------


Modifie app/index.js pour ajouter un lien vers /profile/123 :


import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomePage() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Bienvenue sur l'Accueil !</Text>
      <Link href="/about" style={{ marginTop: 20, color: 'blue' }}>
        Aller à la page À propos
      </Link>
      <Link href="/profile/123" style={{ marginTop: 20, color: 'blue' }}>
        Voir le profil 123
      </Link>
    </View>
  );
}

*/