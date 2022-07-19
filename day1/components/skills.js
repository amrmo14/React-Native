import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet ,ProgressBarAndroid} from 'react-native';

function Skills(){
  return(
    <View style={{marginVertical:20}}>
    <Text style={{color:'white',fontSize:30}}>Skills</Text>
     <View style={styles.viewRow}>
        <Text style={styles.text}>HTML</Text>
        <Text style={styles.textDetails}>95%</Text>
      </View>
       <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.95}
          style={{color:'orange'}}
        />

      <View style={styles.viewRow}>
        <Text style={styles.text}>CSS</Text>
        <Text style={styles.textDetails}>95%</Text>
      </View>
      <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.95}
          style={{color:'orange'}}
        />

      <View style={styles.viewRow}>
        <Text style={styles.text}>JS</Text>
        <Text style={styles.textDetails}>90%</Text>
      </View>
      <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.9}
          style={{color:'orange'}}
        />

        <View style={styles.viewRow}>
        <Text style={styles.text}>Agular</Text>
        <Text style={styles.textDetails}>80%</Text>
      </View>
      <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.8}
          style={{color:'orange'}}
        />

         <View style={styles.viewRow}>
        <Text style={styles.text}>React</Text>
        <Text style={styles.textDetails}>85%</Text>
      </View>
      <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.85}
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

export default Skills;