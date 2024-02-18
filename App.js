import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert,TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: "Buy coffee", key: '1'},
    {text: "Create an App", key: '2'},
    {text: "Play on the switch", key: '3'},
  ])

  const pressHandler = (key)=>{
    setTodos((prev)=>{
      return prev.filter(todo=> todo.key !== key);
    });
  }

  const submitHandler = (txt)=>{
    if (txt.length > 3) {
      setTodos((prevTodos=>{
        return [...prevTodos,{text:txt, key:Math.random().toString()}]
      }));
    }else{
      Alert.alert(
        "OOPS!",
        "Todos must be  over 3 chars long",
        [
          {
            text:"Understood",
          }
        ]
        )
    }
    
  }
  
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content:{
    padding:40,
  },
  list:{
    marginTop: 20,
  }
});