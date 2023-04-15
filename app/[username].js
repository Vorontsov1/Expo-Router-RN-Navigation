import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useSearchParams } from 'expo-router';


const profile = () => {
  const router = useRouter();
  const {name, username} = useSearchParams();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {name}(@{username})</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
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
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 50,
    textAlign: "center",
    color: "#259F90",
  },
  button: {
    marginTop: 50,
    backgroundColor: "#6C63FF",
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.95,
    shadowRadius: 5.84,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
