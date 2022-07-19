import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

function Details() {
  return (
    <View style={{marginVertical:20}}>
      <View style={styles.viewRow}>
        <Text style={styles.text}>Age</Text>
        <Text style={styles.textDetails}>24</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.text}>Residence</Text>
         <Text style={styles.textDetails}>Egypt</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.text}>Freelance</Text>
         <Text style={styles.textDetails}>Available</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.text}>Address</Text>
         <Text style={styles.textDetails}>Alex</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'orange',
    marginVertical: 5,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
  },
   textDetails: {
    marginVertical: 5,
    fontSize: 20,
    padding: 10,
    color:'white'
  },

  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
});

export default Details;
