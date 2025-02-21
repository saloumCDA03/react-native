/* exe 04

Créer une liste d'articles avec navigation dynamique
Objectif : Créer une page listant des articles et naviguer vers une page d'article spécifique.

Instruction :

Création de la liste des articles :

Dans le dossier app/blog, créez un fichier index.js.
Dans ce fichier, définissez un composant BlogList qui déclare un tableau d'articles.
Exemple de tableau :
const articles = [
  { slug: 'premier-article', title: 'Premier Article' },
  { slug: 'deuxieme-article', title: 'Deuxième Article' },
];

Affichez un titre "Liste des articles :" et, pour chaque article, 
créez un lien en utilisant le composant <Link> de expo-router.
Le lien devra pointer vers /blog/{slug} (par exemple, /blog/premier-article).

Création de la route dynamique :

Toujours dans le dossier app/blog, créez un fichier nommé [slug].js.
Dans ce fichier, définissez un composant BlogPost qui utilise useLocalSearchParams() 
pour récupérer le paramètre dynamique slug depuis l'URL.
Affichez le texte "Article: {slug}" pour indiquer l'article sélectionné.

Accédez à la page /blog pour vérifier que la liste des articles s'affiche correctement.
Cliquez sur un lien pour vous assurer que la navigation dynamique fonctionne 
et que la page d'article affiche bien le slug correspondant.

------------------------

 app/blog/index.jsx :
*/


import { Text, View, FlatList } from 'react-native';
import { Link } from 'expo-router';


export default function BlogList() {
  // Définition d'un tableau d'articles, chacun ayant un 'slug' et un 'title'
  const articles = [
    { slug: 'premier-article', title: 'Premier Article' },
    { slug: 'deuxieme-article', title: 'Deuxième Article' },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Liste des articles :</Text>

      {articles.map((article) => (
        // Le composant Link permet de naviguer vers la page d'article dynamique
        // La clé est définie avec le slug pour assurer l'unicité de chaque élément de la liste
        <Link
          key={article.slug}
          href={`/blog/${article.slug}`} // Construction dynamique de l'URL de l'article
          style={{ marginBottom: 10, color: 'blue' }} // Style du lien (espacement et couleur bleue)
        >
          {/* Affichage du titre de l'article */}
          {article.title}
        </Link>
      ))}
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Liste des articles avec FlatList :</Text>

      {/* FlatList optimise l'affichage des articles */}
      <FlatList
        data={articles}
        keyExtractor={(item) => item.slug} // Clé unique pour chaque élément
        renderItem={({ item }) => (
          <Link
            href={`/blog/${item.slug}`}
            style={{ marginBottom: 10, color: 'blue' }}
          >
            {item.title}
          </Link>
        )}
      />
    </View>
  );
}
/*
----------
 app/blog/[slug].js :

import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function BlogPost() {
  const { slug } = useLocalSearchParams();
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Article: {slug}</Text>
    </View>
  );
}
  */