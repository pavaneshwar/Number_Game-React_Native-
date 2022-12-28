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
            <Text style={{fontSize:20}}> Find The Number Game</Text>
            <View style={styles.body} >
                <TextInput style={styles.numberArea} maxLength={2} keyboardType="number-pad" onChangeText={numberInput} value={enteredNumber}/>
                <PrimaryButton press={checkSaveNumber}>Lock It</PrimaryButton>
                <PrimaryButton press={reset}>Reset</PrimaryButton>
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
        width:300,
        height:150,
        alignItems:"center",
        backgroundColor:'yellow',
        borderRadius:10,
        elevation:10
    },
    body:{
        alignSelf:"center",
        alignItems:"center",
        backgroundColor:'grey',
        width:100,
        height:100,
        borderRadius:20,
        elevation:5,
    }
});

