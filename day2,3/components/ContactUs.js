import React from "react";
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {useFormik} from "formik";
import { Button } from "@rneui/themed";

const Contact = () => {
    const {handleChange, handleSubmit, values} = useFormik({
        initialValues: {name: '', email: '', message: ""},
        onSubmit: values => 
                alert(JSON.stringify(values.name +  values.email))
    })

    return(
        <View style= {{
            flex: 1,
            backgroundColor: "#fff",
        }}> 
            <Text style={{ fontSize: 20, margin: 15}}> Send us an email </Text> 
      
            <TextInput 
                placeholder="enter your name" 
                onChangeText={handleChange('name')}
                style={{ fontSize: 15, margin: 10,borderWidth:2,borderRadius:5,borderColor:'grey',padding:5}}
             />
            <TextInput placeholder="enter your email" 
                onChangeText={handleChange('email')}
                style={{ fontSize: 15, margin: 10,borderWidth:2,borderRadius:5,borderColor:'grey',padding:5}}
            />
            <TextInput placeholder="enter your message"
                onChangeText={handleChange('message')}
                style={{ fontSize: 15, margin: 10,borderWidth:2,borderRadius:5,borderColor:'grey',padding:5}}
                 numberOfLines={10}
                  multiline={true}
            />
            <Button title="Submit" onPress={handleSubmit} 
             style={{ fontSize: 15, margin: 10}}/>
        </View>
            )

}

 
export default Contact;