import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}){
    return(
            <View style={todoItemStyles.item}>
                <Text style={todoItemStyles.text}>{item.text}</Text>
                <TouchableOpacity>
                    <MaterialIcons name="delete" size={24} color="white" onPress={()=> pressHandler(item.key)}/>
                </TouchableOpacity>
            </View>
    )
}

const todoItemStyles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderRadius: 10,
        backgroundColor:"coral",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    text:{
        color:"#FFF",
    }
});