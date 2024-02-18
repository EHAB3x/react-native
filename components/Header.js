import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={headerStyles.header}>
            <Text style={headerStyles.title}>My Todos</Text>
        </View>
    )
}

const headerStyles = StyleSheet.create({
    header:{
        height:80,
        paddingTop: 38,
        backgroundColor: "coral"
    },
    title: {
        textAlign:"center",
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    }
});