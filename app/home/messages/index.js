import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from 'expo-router';

const Messages = () => {
  return (
    <View>
      <Link href='/home/messages/messageRoom'>Messages with Ievgen</Link>
      <Text>Messages with Anton</Text>
      <Text>Messages with Anastasiia</Text>
      <Text>Messages with David</Text>
    </View>
  );
};

export default Messages;
const styles = StyleSheet.create({});
