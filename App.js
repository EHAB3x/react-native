import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  const storeData = async (todos) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('todos');
      if (value !== null) {
        // We have data!!
        setTodos(JSON.parse(value));
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const pressHandler = (key) => {
    setTodos(prev => {
      return prev.filter(todo => todo.key !== key);
    });
    storeData(todos.filter(todo => todo.key !== key));
  }

  const submitHandler = (txt) => {
    if (txt.length > 3) {
      const newTodo = { text: txt, key: Math.random().toString() };
      setTodos(prevTodos => {
        const updatedTodos = [...prevTodos, newTodo];
        storeData(updatedTodos);
        return updatedTodos;
      });
    } else {
      Alert.alert(
        "OOPS!",
        "Todos must be over 3 chars long",
        [
          {
            text: "Understood",
          }
        ]
      )
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
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
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
