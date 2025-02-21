
import React from "react";
import { View, StyleSheet } from "react-native";

const SuperposedSquares = () => {
    return (
        <View style={styles.container}>
            <View style={styles.lowerSquare} />
            <View style={styles.upperSquare} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    lowerSquare: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        position: "absolute",
        left: 9,
        top: 35,
    },
    upperSquare: {
        width: 100,
        height: 100,
        left: 5,
        top: 5,
        backgroundColor: "red",
        opacity: 0.5,
        position: "absolute",
        zIndex: 1,
    },
});

export default SuperposedSquares;
