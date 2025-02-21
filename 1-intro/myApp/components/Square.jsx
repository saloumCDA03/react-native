import React from "react";
import { View, StyleSheet } from "react-native";

const Square = ({ color, position }) => {
  return (
    <View
      style={[styles.square, position, { backgroundColor: color || "black" }]}
    />
  );
};

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
    margin: 10,
  },
});

export default Square;