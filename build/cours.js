/* git init

********1 Configuration de app.json************
Avant de construire votre application, assurez-vous que votre fichier app.json est correctement configuré. Ce fichier contient des métadonnées importantes sur votre application, telles que le nom, la description, les icônes, les écrans de démarrage, etc.
Exemple de configuration minimale dans app.json :

{
  "expo": {
    "name": "VotreAppName",
    "slug": "VotreAppName",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./path/to/your/app-icon.png",
    "splash": {
      "image": "./path/to/your/splash-screen.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname"
    },
    "android": {
      "package": "com.yourcompany.yourappname"
    },
    "platforms": ["ios", "android"]
  }
}
************
eas-cli est un outil de ligne de commande fourni par Expo pour simplifier le processus de construction et de soumission de vos applications React Native aux boutiques d'applications. 
Pour l'installer globalement sur votre machine, vous pouvez utiliser la commande 
   ---- npm install -g eas-cli 
Cela vous permettra d'accéder aux commandes eas dans votre terminal et de profiter des fonctionnalités avancées offertes par EAS (Expo Application Services).

**********2 Connectez-vous à votre compte Expo

exécutez la commande suivante pour vous connecter :
          eas login
Vous pouvez vérifier si vous êtes connecté en exécutant 
    eas whoami.

***********3 Configurer le projet
Pour configurer un projet Android ou iOS pour EAS Build, exécutez la commande suivante :
eas build:configure

**********4 Exécuter le build


Le moyen le plus simple d’essayer EAS Build est de créer une version que vous pouvez exécuter sur votre appareil/émulateur Android ou votre simulateur iOS. 
Le format de fichier par défaut utilisé lors de la création d'applications Android avec EAS Build est un Android App Bundle (AAB/ .aab ). 
Ce format est optimisé pour la distribution sur le Google Play Store. 

Cependant, les AAB ne peuvent pas être installés directement sur votre appareil. 
Pour installer une version directement sur votre appareil ou émulateur Android, vous devez plutôt créer un package Android ( .apk ).

**Configurer un profil pour créer des APK
Pour générer un .apk , modifiez le eas.json en ajoutant 
        "production": {
            "android": {
                "buildType": "apk"
            }
            }
        },

Vous pouvez maintenant exécuter votre build avec la commande suivante :
        eas build -p android --profile preview
*/
