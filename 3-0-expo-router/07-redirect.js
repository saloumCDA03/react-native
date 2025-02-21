/*
Les redirections permettent de renvoyer l'utilisateur vers une autre URL en fonction de critères définis dans l'application (par exemple, vérifier l'authentification).

Redirection déclarative avec <Redirect> :
Vous pouvez utiliser le composant <Redirect> pour effectuer immédiatement une redirection. 
Par exemple, si l'utilisateur n'est pas connecté, retourner <Redirect href="/login" /> redirige automatiquement vers la page de connexion.

import { View, Text } from 'react-native';
import { Redirect } from 'expo-router';

export default function Page() {
  const { user } = useAuth(); // Supposons que useAuth() vérifie l'authentification

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <View>
      <Text>Welcome Back!</Text>
    </View>
  );
}
----
Exercice  7

Créer une page protégée qui redirige automatiquement l'utilisateur non authentifié vers la page de connexion.

Instructions :

Créez le fichier app/protected.js. 

Simulez un état d'authentification :
Déclarez une variable (par exemple, isAuthenticated) et initialisez-la à false pour simuler qu'aucun utilisateur n'est authentifié.

Utilisez <Redirect> :
Dans le composant, vérifiez l'état d'authentification.

Si l'utilisateur n'est pas authentifié, retournez le composant <Redirect> qui pointe vers /login.
Sinon, affichez un message de bienvenue indiquant que l'utilisateur est sur la page protégée.
En accédant à /protected, l'utilisateur non authentifié sera redirigé vers / grâce à <Redirect>
---
import { View, Text } from 'react-native';
import { Redirect } from 'expo-router';

export default function ProtectedPage() {
  // Simuler l'état d'authentification
  const isAuthenticated = false;

  // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  // Si l'utilisateur est authentifié, affichez la page protégée
  return (
    <View style={{ padding: 20 }}>
      <Text>Bienvenue sur la page protégée !</Text>
    </View>
  );
}
--
*/