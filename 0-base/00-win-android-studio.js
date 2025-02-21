/*
Configuration d'un Émulateur Android avec Expo Go

--------------------------------------------------------------------------
Windows : Ces instructions concernent un système Windows.

1. Téléchargement et installation d'Android Studio
Téléchargez Android Studio
Rendez-vous sur le site officiel d'Android Studio et téléchargez l'installateur.

Lancez l'installation

Ouvrez l'installateur d'Android Studio.
Dans la section "Sélectionnez les composants à installer", cochez Android Studio et Android Virtual Device (AVD).
Cliquez sur Suivant.
Choix du type d'installation

Dans l'assistant d'installation, sous "Type d'installation", sélectionnez Standard.
Cliquez sur Suivant.
Vérification des paramètres

L'assistant vous demandera de vérifier les paramètres (version du SDK Android, platform-tools, etc.).
Vérifiez les paramètres, puis cliquez sur Suivant.
Acceptez les licences

Dans la fenêtre suivante, acceptez les licences pour tous les composants disponibles.
Cela permettra l'installation complète des outils nécessaires.


2. Configuration des variables d'environnement
Configurer la variable d'environnement ANDROID_HOME

************************************
Une fois l'installation terminée: 
Exécutez la commande suivante pour afficher toutes les variables d'environnement et vérifiez que ANDROID_HOME figure bien dans la liste:  
    Get-ChildItem -Path Env:
Vérifier l'installation d'adb:
    adb --version

************************************

vous devez configurer la variable ANDROID_HOME pour indiquer où se trouve le SDK Android.
Ouvrez le Panneau de configuration de Windows puis accédez à Comptes d'utilisateurs > Comptes d'utilisateurs (encore) > Modifier mes variables d'environnement.
Cliquez sur Nouveau pour créer une nouvelle variable utilisateur :
Nom de la variable : ANDROID_HOME
Valeur de la variable :
Par défaut, le SDK Android se trouve ici :
%LOCALAPPDATA%\Android\Sdk
Pour vérifier l'emplacement du SDK dans Android Studio, allez dans Paramètres > Langages et Frameworks > Android SDK et notez l'emplacement affiché à côté de Android SDK Location.
Vérifier que la variable ANDROID_HOME est chargée

Ouvrez PowerShell.
Exécutez la commande suivante pour afficher toutes les variables d'environnement : Get-ChildItem -Path Env:

Vérifiez que ANDROID_HOME figure bien dans la liste.
Ajouter les platform-tools au PATH

Toujours dans les variables d'environnement, sélectionnez la variable Path dans la section des variables utilisateur et cliquez sur Modifier.
Cliquez sur Nouveau et ajoutez le chemin vers le dossier platform-tools du SDK, par exemple :
%LOCALAPPDATA%\Android\Sdk\platform-tools
Cela vous permettra d'exécuter des outils comme adb depuis n'importe quel terminal.
Vérifier l'installation d'adb

Dans PowerShell, exécutez la commande suivante pour vérifier que adb est accessible :adb --version

*********************************
3. Création et lancement d'un émulateur Android
Configurer l'émulateur avec Android Studio
Ouvrez Android Studio.
Cliquez sur AVD Manager ( Virtual Device Manager) dans la barre d'outils ou via le menu.
Dans l'AVD Manager, cliquez sur Créer un nouvel appareil virtuel.
Sélectionnez un modèle d'appareil (par exemple, Pixel 3) et cliquez sur Suivant.
Choisissez une image système (assurez-vous qu'elle est compatible avec Expo Go) et cliquez sur Suivant.
Configurez les options (laissez les paramètres par défaut si vous le souhaitez) et cliquez sur Terminer.
Lancez l'émulateur créé.
***************************
Lorsque vous démarrez un serveur de développement avec npx expo start sur la page de démarrage du développement, appuyez sur a pour ouvrir l'émulateur Android. Expo CLI installera automatiquement Expo Go
*/
