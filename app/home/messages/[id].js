import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSearchParams } from 'expo-router';



const messageRoom = () => {
  const { id } = useSearchParams();
  return (
    <View>
      <Text style={styles.text}>messageRoom with id:{id}</Text>
    </View>
  );
}

export default messageRoom;
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'royalblue',
    textAlign: 'center',
    marginTop: 50,
  },
}); 
