import {Text, View,StyleSheet, Alert, FlatList} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import NumberContainer from "../Components/NumberContainer";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/Title";
import Logs from "../Components/Logs";
import { Colors } from "react-native/Libraries/NewAppScreen";


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


function GamePage({kuduthaNumber,onGameOver,onGameWon}){

    const initialGuess = generaterandomButton(1,100,kuduthaNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [log, setLog] = useState([currentGuess]);
    let count=log.length;
    let tries=5-count;

    if(count===1){
        Alert.alert('Mudinja Pudi','You have 5 tries to find me',[{text:"Seri Mudu",style:"default"}]);
    }

    useEffect(() => {
      if(currentGuess===kuduthaNumber){
        onGameWon();
      }
    }, [min,max,currentGuess,count]);

    useEffect(() => {
        if(count>5){
          onGameOver();
        }
      }, [min,max,currentGuess,count]);

    

    function newGuess(direction){
            
            if(direction==='higher'&&currentGuess>kuduthaNumber ||direction==='lower'&&currentGuess<kuduthaNumber){
                Alert.alert("Don't Lie","You know that's wrong",[{text:'Sorry Sir',style:'cancel'}])
                return;
            }
        
                if(direction==='higher'){
                    min=currentGuess+1;
                    count+=1;
                }
                 else if(direction==='lower'){
                    max=currentGuess;
                    count+=1;
                }
            
            const newRndNum=generaterandomButton(min,max,currentGuess);
            setCurrentGuess(newRndNum);
            setLog(e=>[newRndNum,...e]);
    }

    return(
        <View>
            <View style={styles.gameArea}>
                <Title>FIND ME</Title>
                <View style={styles.textArea}>
                    <NumberContainer>{currentGuess}</NumberContainer>
                </View>
                <View style={styles.btns}>
                    <PrimaryButton press={newGuess.bind(this,'higher')}>+</PrimaryButton>
                    <PrimaryButton press={newGuess.bind(this,'lower')}>-</PrimaryButton>
                </View>
            </View>
            <View style={styles.logArea}>
                <Text  style={styles.tries}>You have: <Text style={{color:"#b5d8d0"}}>{tries} Tries</Text> </Text>
                {/* <Logs onLog={log}/> */}
                <FlatList data={log} renderItem={(itemdata)=>{return(<Logs number={count-itemdata.index} guess={itemdata.item}/>)}}/>
                
            </View>
        </View>
    );

}
export default GamePage;


const styles = StyleSheet.create({
   gameArea:{
    marginTop:150,
    marginBottom:20,
    width:350,
    height:250,
    alignItems:"center",
    borderRadius:10,
    alignSelf:"center"
   },
   btns:{
    flexDirection:'row',
    marginTop:12
   },
   textArea:{
    borderWidth:5,
    borderColor:"#ffe600",
    width:200,
    borderRadius:20,
    alignItems:"center"
   },
   logArea:{
    marginLeft:20,
   },
   tries:{
    padding:7,
    fontSize:20,
    fontWeight:"bold",
    
   }
});