import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from 'expo-router';


const profile = () => {
const router = useRouter();
  return (
    <View style={styles.container}>
          <Text style={styles.text}>Profile Screen</Text>
          <Button title="Go to Home" onPress={() => router.back()}  />
    </View>
  );
}

export default profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDA707",
  },
  text: {
    fontSize: 30,
    marginTop: 50,
    textAlign: "center",
    color: "#259F90",
  },
});
