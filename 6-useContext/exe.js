Exercice 1 : Création et Utilisation Basique de Contexte
Créez un contexte UserContext avec une valeur par défaut { name: 'John Doe' }.
Utilisez UserContext.Provider pour envelopper un composant App.
Dans un composant enfant UserProfile, utilisez useContext pour accéder et afficher le nom de l'utilisateur.
Exercice 2 : Mise à Jour de la Valeur du Contexte
Ajoutez un état dans App pour gérer le nom de l'utilisateur.
Passez cet état et une fonction pour le mettre à jour à UserContext.
Dans UserProfile, ajoutez un bouton qui change le nom de l'utilisateur lorsque cliqué.
Exercice 3 : Utilisation de Plusieurs Contextes
Créez un deuxième contexte ThemeContext pour gérer le thème de l'application.
Fournissez une valeur et une fonction pour changer le thème.
Dans UserProfile, affichez le thème actuel et ajoutez un bouton pour le changer.
Exercice 4 : Utilisation d'un Hook Personnalisé
Créez un hook personnalisé useUser qui encapsule la logique d'accès à UserContext.
Utilisez useUser dans UserProfile pour accéder aux données et fonctions de l'utilisateur.
Exercice 5 : Contexte Dynamique
Modifiez UserContext pour accepter un ID d'utilisateur et charger les données de l'utilisateur en fonction de cet ID.
Dans App, changez l'ID d'utilisateur et observez les changements dans UserProfile.
Exercice 6 : Gestion des Erreurs
Ajoutez une gestion des erreurs dans UserContext pour gérer les cas où l'ID d'utilisateur est invalide.
Dans UserProfile, affichez un message d'erreur si une erreur se produit.
Exercice 7 : Optimisation des Performances
Utilisez React.memo pour éviter des rendus inutiles dans UserProfile.
Assurez-vous que les changements dans ThemeContext n'entraînent pas un re-rendu de UserProfile si les données de l'utilisateur n'ont pas changé.
Exercice 8 : Contexte avec Reducer
Remplacez l'état et la fonction de mise à jour dans UserContext par un useReducer.
Implémentez différentes actions pour gérer les différentes mises à jour de l'utilisateur.
Exercice 9 : Thème Sombre/Clair
Utilisez ThemeContext pour implémenter un basculement entre un thème sombre et clair pour l'application.
Assurez-vous que le thème est appliqué correctement à tous les composants.
Exercice 10 : Contexte pour la Navigation
Créez un contexte NavigationContext pour gérer l'état de navigation de l'application.
Fournissez des fonctions pour naviguer entre différentes "pages" de l'application.
Utilisez ce contexte dans différents composants pour changer la "page" affichée.
Ces exercices couvrent une variété de cas d'utilisation et de scénarios pour useContext, et devraient vous aider à comprendre comment l'utiliser efficacement dans vos applications React.