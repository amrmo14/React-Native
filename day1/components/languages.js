import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet ,ProgressBarAndroid} from 'react-native';

function Lang(){
  return(
    <View style={{marginVertical:20}}>
    <Text style={{color:'white',fontSize:30}}>Languages</Text>
     <View style={styles.viewRow}>
        <Text style={styles.text}>Arabic</Text>
        <Text style={styles.textDetails}>95%</Text>
      </View>
       <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.95}
          style={{color:'orange'}}
        />

      <View style={styles.viewRow}>
        <Text style={styles.text}>English</Text>
        <Text style={styles.textDetails}>90%</Text>
      </View>
      <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.9}
          style={{color:'orange'}}
        />

      <View style={styles.viewRow}>
        <Text style={styles.text}>French</Text>
        <Text style={styles.textDetails}>80%</Text>
      </View>
      <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.8}
          style={{color:'orange'}}
        />


    </View>

  )
}

const styles = StyleSheet.create({
  text: {
    color:'white',
    marginVertical: 5,
    fontSize: 20,
    padding: 10,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:10,
    fontSize:10
  },
    textDetails: {
    marginVertical: 5,
    fontSize: 20,
    padding:10,
    color:'white'
  },
  
});

export default Lang;