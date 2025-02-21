/******** Configuration d'Android Studio macOS ****************

https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated

Téléchargez et installez Android Studio. 
Ouvrez l'application Android Studio, cliquez sur "Plus d'actions" et sélectionnez "Gestionnaire de SDK".
Dans Android Studio, allez dans Paramètres > Langages & Frameworks > SDK Android. 
Dans l'onglet "Plateformes SDK", sélectionnez la dernière version d'Android (niveau d'API).
Ensuite, cliquez sur l'onglet "Outils SDK" et assurez-vous d'avoir au moins une version des outils de build du SDK Android et de l'émulateur Android installée.

Copiez ou mémorisez le chemin indiqué dans la case "Emplacement du SDK Android".

Cliquez sur Appliquer et OK pour installer le SDK Android et les outils de build associés.

Sur macOS ou Linux, ajoutez une variable d'environnement pointant vers l'emplacement du SDK Android dans ~/.bash_profile (ou ~/.zshrc si vous utilisez Zsh). Par exemple :
    export ANDROID_HOME=/votre/chemin/ici
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools

Rechargez les variables d'environnement dans votre shell actuel :
    source $HOME/.zshrc
# ou
    source $HOME/.bashrc

Enfin, assurez-vous de pouvoir exécuter adb depuis votre terminalen tapant :
    adb devices
*************************
Configuration d'un émulateur
Sur l'écran principal d'Android Studio, cliquez sur "Plus d'actions", puis "Gestionnaire d'appareils virtuels" dans le menu déroulant.
Cliquez sur le bouton "Créer un appareil".
Sous "Sélectionner le matériel", choisissez le type de matériel que vous souhaitez émuler. 
Sélectionnez une version d'OS à charger sur l'émulateur (probablement l'une des images système dans l'onglet Recommandé), et téléchargez l'image.
Modifiez les autres paramètres si nécessaire, et appuyez sur Terminer pour créer l'émulateur. 
Vous pouvez maintenant exécuter cet émulateur à tout moment en appuyant sur le bouton Lecture dans la fenêtre du gestionnaire d'AVD.

Installation d'Expo Go
Lorsque vous démarrez un serveur de développement avec npx expo start sur la page de démarrage du développement, appuyez sur a pour ouvrir l'émulateur Android. Expo CLI installera automatiquement Expo Go.
*/