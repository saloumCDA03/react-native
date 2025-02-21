import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const AffichageSaisie = () => {
  const [texte, setTexte] = useState("");

  const gererChangementTexte = (nouveauTexte) => {
    console.log(nouveauTexte);
    setTexte(nouveauTexte);
  };

  return (
    <View style={styles.conteneur}>
      <Text style={styles.etiquette}>Saisissez votre texte :</Text>
      <TextInput
        style={styles.champSaisie}
        onChangeText={gererChangementTexte}
        value={texte}
      />
      <Text style={styles.texteAffiche}>Vous avez saisi :
      </Text>
      <Text style={styles.texteAffiche}>
        {texte}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteneur: {
    padding: 20,
  },
  etiquette: {
    marginBottom: 10,
  },
  champSaisie: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  texteAffiche: {
    marginTop: 20,
    fontSize: 30
  },
});

export default AffichageSaisie;