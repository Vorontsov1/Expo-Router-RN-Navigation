import { StyleSheet, Text, View } from "react-native";
import { Link, Stack, Redirect } from "expo-router";

const users = [
  {
    username: "ievgen",
    name: "Ievgen",
  },
  {
    username: "anton",
    name: "Anton",
  },
  {
    username: "nastya",
    name: "Anastasiia",
  },
  {
    username: "david",
    name: "David",
  },
];

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Expo-Router</Text>

        {users.map((user) => (
          <Link
            key={user.username}
            style={styles.subtitle}
            href={`/${user.username}`}>
            Open {user.name}`s Profile
          </Link>
        ))}

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
    color: "royalblue",
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 26,
    color: "#FDA707",
    fontWeight: "bold",
    marginTop: 24,
  },
});
