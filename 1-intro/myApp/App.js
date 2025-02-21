
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';


import Rectangle from "./components/Rectangle";
import Square from "./components/Square";
import SuperposedSquares from "./components/SuperposedSquares";
import ColorChangingText from "./components/ColorChangingText";
import AffichageSaisie from "./components/AffichageSaisie";

export default function App() {
  return (
    <View style={styles.container}>
      <AffichageSaisie />
      <ColorChangingText />
      {/* <SuperposedSquares /> */}
      {/* <Rectangle /> */}
      {/* <Square color="violet" position={styles.topRightPosition} />
      <View style={styles.row}>
        <Square color="red" />
        <Square color="green" />
        <Square color="blue" />
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight
  },
  row: {
    flexDirection: "row",
  },
  topRightPosition: {
    position: "absolute",
    top: Constants.statusBarHeight,
    right: 0,
  },
});