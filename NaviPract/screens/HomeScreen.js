import { View, Text, Button, StyleSheet, SafeAreaView, TextInput, StatusBar } from "react-native";
import { useState } from "react";

export default function HomeScreen({navigation}){
    const [homeName, setHomeName] = useState("")
    return(
        <SafeAreaView style={homeStyle.homeContainer}>
            <Text style={homeStyle.homeText}>Home Screen</Text>
            <TextInput style={homeStyle.homeTextInput} value={homeName} onChangeText={setHomeName}/>
            <Button title="Go to About" onPress={()=> navigation.navigate('About',{homeName})}/>
        </SafeAreaView>
    )
}

const homeStyle = StyleSheet.create({
    homeContainer:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
    },
    homeText:{
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center'
    },
    homeTextInput:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        
    }
})