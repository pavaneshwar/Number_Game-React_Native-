import { Text, TextInput, View,StyleSheet } from "react-native";
import PrimaryButton from '../Components/PrimaryButton';

function StartPage(){


    return(
        <View style={styles.StartPage}>
            <Text> Find The Number Game</Text>
            <View style={styles.body} >
                <TextInput style={styles.numberArea} maxLength={2} keyboardType="number-pad"/>
                <PrimaryButton>Lock It</PrimaryButton>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
        </View>
    );
}

export default StartPage;

const styles = StyleSheet.create({
    numberArea:{
        borderBottomWidth:2,
        borderBottomColor:'red',
        width:30,
        textAlign:'center',
        marginBottom:10,
        alignSelf:"center",
        fontSize:20
    },
    StartPage:{
        marginTop:50,
        margin:50,
        alignSelf:"center",
        backgroundColor:'yellow',
    },
    body:{
        alignSelf:"center",
        backgroundColor:'grey'
    }
});

