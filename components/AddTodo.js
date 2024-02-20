import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodo({submitHandler}){
    const [text, setText] = useState('');
    const changeHandler = (value)=>{
        setText(value);
    };

    return(
        <View>
            <TextInput 
                style={AddTodoStyles.input}
                placeholder="New todo..." 
                onChangeText={changeHandler}
                value={text}    
            />
            <Button onPress={()=>{
                submitHandler(text)
                setText('');
                }} 
                title="add todo" 
                color="coral"
            />
        </View>
    )
}

const AddTodoStyles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#DDD",       
    }
})