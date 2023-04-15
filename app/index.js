import { StyleSheet, Text, View } from "react-native";
import {Link} from "expo-router";



export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Link style={styles.subtitle} href="/profile">
          Open Profile
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#259F90",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 26,
    color: "#FDA707",
    fontWeight: "bold",
    marginTop: 24,
    textAlign: "center",
  },
});