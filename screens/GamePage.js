import {Text, View,StyleSheet, Alert} from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/Title";
import { useState } from "react";
import NumberContainer from "../Components/NumberContainer";


function generaterandomButton(min,max,ex){
    const rndNum=Math.floor(Math.random()*(max-min))+min;

    if (rndNum===ex){
        return generaterandomButton(min,max,ex);
    }
    else{
        return rndNum;
    }
}

let min=1;
let max=100;

function GamePage({kuduthaNumber}){

    const initialGuess = generaterandomButton(min,max,kuduthaNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function newGuess(direction){
            
            if(direction==='higher'&&currentGuess>kuduthaNumber ||direction==='lower'&&currentGuess<kuduthaNumber){
                Alert.alert("Don't Lie","You know that wrong",[{text:'naanga enna venum ne va pannom....Ponga',style:'cancel'}])
                return;
            }

            if(direction==='higher'){
                min=currentGuess+1;
            }
            else if(direction='lower'){
                max=currentGuess;
            }
            const newRndNum=generaterandomButton(min,max,currentGuess);
            setCurrentGuess(newRndNum);
            console.log(min,max); /*let see whats the min and max*/
    }


    return(
        <View>
            <View style={styles.gameArea}>
                <Title>Random Number</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.btns}>
                    <PrimaryButton press={newGuess.bind(this,'higher')}>+</PrimaryButton>
                    <PrimaryButton press={newGuess.bind(this,'lower')}>-</PrimaryButton>
                </View>
            </View>
            <View>
                <Text>No. Of Tries:</Text>
                <Text>Logs</Text>
            </View>
        </View>
    );

}
export default GamePage;


const styles = StyleSheet.create({
   gameArea:{
    marginTop:100,
    width:300,
    height:150,
    alignItems:"center",
    backgroundColor:'yellow',
    borderRadius:10,
    elevation:10,
    alignSelf:"center"
   },
   btns:{
    flexDirection:'row',
   }
});