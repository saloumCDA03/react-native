/**
 ***** Personnalisation de l'En-tête avec React Navigation *****

Dans React Navigation, l'en-tête (aussi appelé "header" ou "barre de navigation") est une partie cruciale de l'interface utilisateur, permettant aux utilisateurs de naviguer facilement entre les différentes vues de votre application. 
React Navigation offre une grande flexibilité pour personnaliser l'apparence et le comportement de l'en-tête.

Chaque écran dans votre Stack Navigator peut avoir des options spécifiques qui définissent l'apparence et le comportement de l'en-tête pour cet écran particulier.

Vous pouvez définir les options de l'en-tête directement dans le composant Stack.Screen en utilisant la prop options.

    Titre de l'En-tête:
        Vous pouvez définir ou modifier le titre de l'en-tête directement dans les options de l'écran:
            function StackScreen() {
                return (
                    <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Ma Maison' }}
                    />
                    </Stack.Navigator>
                );
                }

    Personnaliser le Style de l'En-tête:
        Voici quelques-unes des options que vous pouvez utiliser pour personnaliser l'en-tête :
            title: Définit le titre de l'en-tête.
            headerStyle: Un objet qui définit le style de la barre d'en-tête. Vous pouvez y définir des propriétés comme backgroundColor.
            headerTintColor: Définit la couleur des boutons et du titre dans l'en-tête.
            headerTitleStyle: Un objet qui définit le style du titre dans l'en-tête.
                function StackScreen() {
                    return (
                        <Stack.Navigator>
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                            title: 'Ma Maison',
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            }}
                        />
                        </Stack.Navigator>
                    );
                    }

    Partager les Options Communes entre les Écrans
        Si vous souhaitez appliquer un style commun à tous les écrans d'un navigateur, vous pouvez utiliser la propriété screenOptions du navigateur:
        function StackScreen() {
            return (
                <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                    backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }}
                >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Ma Maison' }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ title: 'Mon Profil' }}
                />
                </Stack.Navigator>
            );
            }

 */
/****************************************
 * ******************************************
 Personnalisation de l'En-tête
Personnalisez l'en-tête dans HomeScreen et DetailsScreen avec un titre et une couleur de fond.

-----------------------methode 1 -----------------

<NavigationContainer
screenOptions={{
    headerStyle: {
        backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold",
    },
}}
>
------------------------methode 2 ----------------------------------------------

 <Stack.Screen
          name="Home" // Nom unique de l'écran, utilisé pour la navigation.
          component={HomeScreen} // Composant à afficher pour cet écran.
          options={{
            title: "Accueil",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} // Options pour personnaliser l'apparence et le comportement de cet écran.
        />

        import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";
import DetailsScreen from "./src/screen/DetailsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1471E8", // Définit la couleur de fond de l'en-tête de chaque écran
          },
          headerTintColor: "#fff", // Définit la couleur des éléments de l'en-tête (titre, boutons retour, etc.)
          headerTitleStyle: {
            fontWeight: "bold", // Définit le style du titre de l'en-tête, ici en gras
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "bonjour", // Définit le titre affiché dans l'en-tête de l'écran
            headerStyle: {
              backgroundColor: "#f4511e", // Couleur de fond de l'en-tête pour cet écran spécifique
            },
            headerTintColor: "#fff", // Couleur des éléments de l'en-tête (titre, boutons) pour cet écran
            headerTitleStyle: {
              fontWeight: "bold", // Applique un style de police gras au titre de l'en-tête
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailsScreen}
          options={{ title: "Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

 */
