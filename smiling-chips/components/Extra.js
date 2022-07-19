import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet ,ProgressBarAndroid} from 'react-native';
import { Icon } from '@rneui/themed';

function Extra(){

  return(
    <View style={{marginTop:20,marginBottom:40}}>
    <Text style={{color:'white',fontSize:30}}>Extra Skills</Text>
    <View style={{flexDirection: 'row',marginVertical:10}}>
    <Icon
                name='star'
                type="entypo"
                size={20}
                style={{ padding: 5 }}
                color="orange"
              />
    <Text style={{color:'white',fontSize:20}} >Bootstrap, SASS</Text>
    </View>
    <View style={{flexDirection: 'row',marginVertical:10}}>
    <Icon
                name='star'
                type="entypo"
                size={20}
                style={{ padding: 5 }}
                color="orange"
              />
    <Text style={{color:'white',fontSize:20}} >Bootstrap, SASS</Text>
    </View>
    <View style={{flexDirection: 'row',marginVertical:10}}>
    <Icon
                name='star'
                type="entypo"
                size={20}
                style={{ padding: 5 }}
                color="orange"
              />
    <Text style={{color:'white',fontSize:20}} >Bootstrap, SASS</Text>
    </View>
     
    </View>
  )

}

export default Extra;