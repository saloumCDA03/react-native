/****************************BottomTabNavigator*******************
 
 Le BottomTabNavigator est un composant de navigation en bas de page qui permet de naviguer entre différents écrans dans une application React Native. 

Étapes pour Installer BottomTabNavigator dans une Application React Native :

Installer les Packages Requis :
    npm install @react-navigation/native @react-navigation/bottom-tabs

1) Importer les Composants :
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import { NavigationContainer } from '@react-navigation/native';

2) Définir les Écrans :
    Définissez les écrans qui seront affichés dans le Bottom Tab Navigator en tant que composants séparés.

3) Créer le Bottom Tab Navigator :
    Utilisez createBottomTabNavigator pour créer le Bottom Tab Navigator :
        const Tab = createBottomTabNavigator();
        function MyTabs() {
        return (
            <Tab.Navigator>
            <Tab.Screen name="Accueil" component={EcranAccueil} />
            <Tab.Screen name="Paramètres" component={EcranParametres} />
            </Tab.Navigator>
        );
        }

4) Envelopper l'Application dans un Navigation Container :
    Enveloppez votre application dans un NavigationContainer et affichez le composant MyTabs pour afficher le Bottom Tab Navigator :
        export default function App() {
            return (
                <NavigationContainer>
                <MyTabs />
                </NavigationContainer>
            )}

6) Personnaliser le Navigator :
    Personnalisez l'apparence et le comportement du Bottom Tab Navigator en utilisant diverses options et propriétés disponibles, telles que changer les couleurs, ajouter des icônes et configurer le comportement de changement d'onglet.
 */
