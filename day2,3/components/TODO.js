import React, { useState } from 'react';
import { Button,FlatList, Text, View, TextInput } from 'react-native';
import AddToDot from './Add';
import List from './List';

function Todo() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("")
    const [todoItem, setTodoItem] = useState({});
    const [update,setUpdate]=useState("false")
    const[key,setKey]=useState("")
  

    const saveText = (text) => {
        setValue(text);  
    }
      const updateText = (key) => {
        setUpdate("true");  
        setKey(key)
    }

    const editItem = () => {
    setTodoItem(() => {
      return data.find((todo) => todo.key == key);
    });
     setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
    setData((prevData) => {
      return [
        {
          value: value,
          key: todoItem.key,
        },
        ...prevData,
      ];
    });
   
    setUpdate("false");
  };
  
  

  const submitHandler = (value) => {
    // alert(value)
    setData((prevData) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevData,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  

  return (
    <View>
      <View>
        <TextInput placeholder="Add Your Todo" 
            onChangeText={saveText}
            style={{ fontSize: 15, margin: 10,borderWidth:2,borderRadius:5,borderColor:'grey',padding:5}}
             numberOfLines={3}
                  multiline={true}
         />
         <View style={{ fontSize: 15, margin: 10}}>
         <Button title="Add" onPress={update=="false"?() =>submitHandler(value):editItem} /> 
         </View>
       </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <List item={item} deleteItem={deleteItem} updateText={updateText} />
        )}
      />
    </View>
  );
}

export default Todo;
