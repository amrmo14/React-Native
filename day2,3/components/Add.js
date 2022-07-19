import { Card } from "@rneui/themed";
import React, { useState } from "react";
import { Button, TextInput,View } from "react-native";



function AddToDo ({submitHandler,data }){
    const [value, setValue] = useState("")
    const [todoItem, setTodoItem] = useState({});
  

    const saveText = (text) => {
        setValue(text);  
    }

    const editItem = (key, text) => {
    setTodoItem(() => {
      return data.find((todo) => todo.key == key);
    });
    todoItem.value = text;
    setValue(text);
  };

    return(
        <View>
        <TextInput placeholder="Add Your Todo" 
            onChangeText={value==''?saveText:editItem}
            style={{ fontSize: 15, margin: 10,borderWidth:2,borderRadius:5,borderColor:'grey',padding:5}}
             numberOfLines={3}
                  multiline={true}
         />
         <View style={{ fontSize: 15, margin: 10}}>
         <Button title="Add" onPress={() => submitHandler(value)} /> 
         </View>
       </View>
    )
}


export default AddToDo;