import { Text, TextInput, View,StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from '../Components/PrimaryButton';


function StartPage({onUserNumber}){

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInput(enteredText){
        setEnteredNumber(enteredText);
    }

    function reset(){
        setEnteredNumber('');
    }

    function checkSaveNumber(){
        const itsANumber=parseInt(enteredNumber);

        if(isNaN(itsANumber)||itsANumber<0||itsANumber>99){
            Alert.alert('Invalid Number','Number must be between 0-99',[{text:'okay',style:"cancel",onPress:reset}]);
            return;
        }
        else{
            onUserNumber(itsANumber);
        }    
    }

    return(
        <View style={styles.StartPage}>
            <Text style={{fontSize:20,textAlign:'center',padding:6,fontFamily:"serif"}}> Find The Number Game</Text>
            <View style={styles.body} >
                <TextInput style={styles.numberArea} maxLength={2} keyboardType="number-pad" onChangeText={numberInput} value={enteredNumber}/>
            </View>
            <View style={styles.btnsContainer}>
                <PrimaryButton press={checkSaveNumber}>Lock Karo</PrimaryButton>
                <PrimaryButton press={reset}>Reset</PrimaryButton>
            </View>
            
        </View>
    );
}

export default StartPage;

const styles = StyleSheet.create({
    StartPage:{
        marginTop:150,
        width:350,
        height:250,
        backgroundColor:'#ffee00',
        borderRadius:10,
        elevation:10, 
        alignItems:"center",
        justifyContent:"space-evenly",
        alignSelf:"center"
    },
    body:{
        alignSelf:"center",
        alignItems:"center",
        backgroundColor:'#0b0c00ff',
        width:250,
        height:100,
        borderRadius:20,
        elevation:5,
        justifyContent:"space-around"
    },
    numberArea:{
        marginTop:5,
        paddingBottom:2,
        width:70,
        textAlign:'center',
        marginBottom:7,
        fontSize:50,
        fontWeight:"bold",
        color:"yellow"
    },
    btnsContainer:{
        flexDirection:'row',
        margin:8
    },
});

