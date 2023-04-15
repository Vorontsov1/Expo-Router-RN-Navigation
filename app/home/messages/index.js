import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from 'expo-router';

const Messages = () => {
  return (
    <View>
      <Link style={styles.messages} href="/home/messages/123">
        Messages with Ievgen
      </Link>
      <Link style={styles.messages} href="/home/messages/456">
        Messages with Anton
      </Link>
      <Link style={styles.messages} href="/home/messages/123">
        Messages with Anastasiia
      </Link>
      <Link style={styles.messages} href="/home/messages/456">
        Messages with David
      </Link>
    </View>
  );
};

export default Messages;
const styles = StyleSheet.create({
  messages: {
    color: "white",
    fontSize: 20,
    padding: 10,
    backgroundColor: "#1317FB",
    marginBottom: 10,  
  },
});
