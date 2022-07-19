import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Card } from 'react-native';
import Constants from 'expo-constants';
import { Avatar } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import MyName from './components/name';
import Details from './components/details'
import Lang from './components/languages';
import Skills from './components/skills'
import Extra from './components/Extra'
import { Button } from "@rneui/themed";

// You can import from local files
// import AssetExample from './components/AssetExample';

// // or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function App() {

  return (
    <ScrollView style={styles.container}>
     <MyName />
     <View style={{height:2,backgroundColor:'gray',margin:5}}></View>
     <Details />
     <View style={{height:2,backgroundColor:'gray',margin:5}}></View>
     <Lang />
     <View style={{height:2,backgroundColor:'gray',margin:5}}></View>
     <Skills />
     <View style={{height:2,backgroundColor:'gray',margin:5}}></View>
     <Extra />

     <Button
              title="Download CV"
              containerStyle={{
                height: 50,
                width: 250,
                marginHorizontal: 40,
                marginVertical: 30,
              }}
              buttonStyle={{ backgroundColor: 'orange' }}
              titleStyle={{
                color: 'white',
                marginHorizontal: 20,
              }}
            />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    // padding: 8,
  },
 
});
