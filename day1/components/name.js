import React from "react";
import {Text, View, Image, ScrollView ,StyleSheet} from "react-native";
import { Avatar } from '@rneui/themed';
import { Icon } from '@rneui/themed';

function MyName(){
   const icons = [
    { name: 'facebook-with-circle' },
    { name: 'twitter-with-circle' },
    { name: 'linkedin-with-circle' },
    { name: 'github-with-circle' },
    { name: 'instagram-with-circle' },
  ];
return(
  <View>
  <View style={{ alignItems: 'center' }}>
        <Avatar
          size={200}
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
        />
        <Text style={styles.text}>Amr Elkoumy</Text>
        <Text style={styles.para}>Front End Developer</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 20,
        }}>
        {icons.map((u, i) => {
          return (
            <View key={i}>
              <Icon
                name={u.name}
                type="entypo"
                size={45}
                style={{ padding: 5 }}
                color="orange"
              />
            </View>
          );
        })}
      </View></View>
   
)
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
    paddingVertical: 10,
    textAlign: 'center',
  },
  para: {
    color: 'gray',
    fontSize: 25,
    textAlign: 'center',
  },
});
export default MyName;