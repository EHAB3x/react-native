import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <Text style={todoItemStyles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const todoItemStyles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderRadius: 10,
        backgroundColor:"coral",
        color:"#FFF",
    },
});