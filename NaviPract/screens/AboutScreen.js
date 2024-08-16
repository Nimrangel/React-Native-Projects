import { View, Text, Button, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AboutScreen({route}) {
    const {homeName} = route.params
    const navigation = useNavigation();
    return(
        <View style={aboutStyle.aboutContainer}>
            <Text style={aboutStyle.aboutText}>About {homeName}</Text>
            <Button title="Go back" onPress={()=> navigation.navigate('Home')}/>
        </View>
    )
}

const aboutStyle = StyleSheet.create({
    aboutContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    aboutText:{
        fontSize:20,
        fontWeight:'bold'
    }
})