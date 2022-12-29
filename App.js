import { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import GameOver from './screens/GameOver';
import GamePage from './screens/GamePage';
import StartPage from './screens/StartPage';
import YouWon from './screens/YouWon';

export default function App() {

  const [givenNumber, setGivenNumber] = useState();

  function userNumberhandler(userNumber){
    setGivenNumber(userNumber);
  }
  let screen=<StartPage onUserNumber={userNumberhandler}/>

  if(givenNumber){
     screen=<GamePage kuduthaNumber={givenNumber}/>
  }

  return (
    
    <LinearGradient colors={["#ff7c25","#ffffff","#01ff2c"]} style={styles.container}>
      <SafeAreaView>{screen}</SafeAreaView>
      {/* <YouWon/> */}
      {/* <GameOver/> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    
    flex:1,
  },
});
