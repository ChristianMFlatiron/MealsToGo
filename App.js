import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
// import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.search}>Search</Text>
        <Text style={styles.list}>list</Text>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    // paddingTop: 50,
    // paddingBottom: 50,
    // backgroundColor: 'purple',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  search: {
    // flex: 1,
    padding: 15,
    backgroundColor: "green",
  },
  list: {
    color: "green",
    flex: 1,
    padding: 15,
    backgroundColor: "blue",
  },
});
