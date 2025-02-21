/*
React Navigation
Introduction
  React Navigation est une bibliothèque populaire pour la gestion de la navigation dans les applications React Native. 
  Elle permet de naviguer entre différents écrans, de passer des données entre eux, et de créer des structures de navigation complexes comme les piles, les onglets et les tiroirs.

Installation
  Pour commencer à utiliser React Navigation, vous devez installer quelques dépendances. 
  Voici les commandes pour installer React Navigation et ses dépendances :

  npm install @react-navigation/native
  npm install react-native-screens react-native-safe-area-context
  npm install @react-navigation/native-stack
  N'oubliez pas d'importer React dans vos fichiers de composant 

Configuration de Base
  Pour utiliser React Navigation, vous devez envelopper votre application dans un composant NavigationContainer :

  import { NavigationContainer } from '@react-navigation/native';

  function App() {
    return (
      <NavigationContainer>
        { Reste de votre code }
      </NavigationContainer>
    );
  }

Création d'un Stack Navigator:
  Un Stack Navigator permet de naviguer entre différents écrans en les empilant les uns sur les autres. 
  Voici comment créer un Stack Navigator et y ajouter quelques écrans :

  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  const Stack = createNativeStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

Navigation entre les Écrans
  Pour naviguer entre les écrans, vous pouvez utiliser la prop navigation qui est passée à chaque écran par React Navigation :

  function HomeScreen=>({ navigation }) => {
    return (
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    );
  }

Passage de Paramètres
  Vous pouvez passer des paramètres à un écran en les ajoutant à l'objet passé à la méthode navigate :

  navigation.navigate('Details', { itemId: 86, otherParam: 'anything' });
  Pour accéder à ces paramètres dans l'écran de destination, utilisez la prop route :


  function DetailsScreen({ route }) {
    const { itemId, otherParam } = route.params;
    return <Text>Item ID: {itemId}</Text>;
  }

Personnalisation de l'En-tête:
React Navigation permet de personnaliser l'en-tête de navigation. 
Vous pouvez définir les options de l'en-tête dans l'objet options du composant Screen :

<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'Accueil' }}
/>

Conclusion
React Navigation est un outil puissant et flexible pour gérer la navigation dans vos applications React Native. 
En suivant ce cours, vous devriez être en mesure de créer des navigateurs de pile, de naviguer entre les écrans, de passer des paramètres et de personnaliser l'en-tête de navigation.
*/
