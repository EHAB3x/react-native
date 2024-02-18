import { StyleSheet, Text, View } from "react-native"

export default Sandbox = () => {
  return (
    <View style={sandBoxStyles.container}>
        <Text style={sandBoxStyles.boxOne}>one</Text>
        <Text style={sandBoxStyles.boxTwo}>two</Text>
        <Text style={sandBoxStyles.boxThree}>three</Text>
        <Text style={sandBoxStyles.boxFour}>four</Text>
    </View>
  )
}

const sandBoxStyles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-end",
        paddingTop:40,
        backgroundColor: "#DDD",
    },
    boxOne:{
        flex: 1,
        backgroundColor: "violet",
        padding: 10,
    },
    boxTwo:{
        flex: 2,
        backgroundColor: "gold",
        padding: 20,
    },
    boxThree:{
        flex: 3,
        backgroundColor: "coral",
        padding: 30,
    },
    boxFour:{
        flex: 4,
        backgroundColor: "skyblue",
        padding: 40,
    },
});
