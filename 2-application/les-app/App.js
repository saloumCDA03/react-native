import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SimpleForm from './components/SimpleForm';
import ListeSimple from './components/ListeSimple';
import Header from './components/Header';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ListeSimple />
      <SimpleForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: Constants.statusBarHeight,
  },
});
