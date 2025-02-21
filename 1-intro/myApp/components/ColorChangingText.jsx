

import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const ColorChangingText = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable onPress={() => setIsActive(!isActive)}>
                <Text
                    style={[
                        styles.text,
                        isActive ? styles.activeText : styles.inactiveText,
                    ]}
                >
                    {isActive ? "Actif" : "Inactif"}
                </Text>
                <Text>Changer l'état</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
    activeText: {
        color: "green",
    },
    inactiveText: {
        color: "red",
    },
});

export default ColorChangingText;