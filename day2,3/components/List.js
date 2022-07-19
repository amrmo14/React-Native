import { Card } from '@rneui/themed';
import React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

function List({ item, deleteItem, updateText }) {
  const [color, setcolor] = useState('black');
  

  function checkDone() {
    if (color == 'black') {
      setcolor('green');
    } else {
      setcolor('black');
    }
  }
 
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderColor: 'grey',
          borderWidth: 2,
          borderRadius: 10,
          margin: 10,
          padding: 5,
        }}>
        <Text style={{ fontSize: 20 }}> {item.value} </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <MaterialCommunityIcons
            size={20}
            name="check"
            style={{ color: color, margin: 5 }}
            onPress={() => checkDone()}
          />

          <MaterialCommunityIcons
            size={20}
            name="email-edit"
            style={{ color: 'blue', margin: 5 }}
            onPress={() => updateText(item.key)}
          />

          <MaterialCommunityIcons
            size={20}
            name="delete"
            style={{ color: 'red', margin: 5 }}
            onPress={() => deleteItem(item.key)}
          />
        </View>
      </View>
    </View>
  );
}

export default List;
