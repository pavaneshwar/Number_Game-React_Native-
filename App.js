import { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView, Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import GameOver from './screens/GameOver';
import GamePage from './screens/GamePage';
import StartPage from './screens/StartPage';
import YouWon from './screens/YouWon';
import { ImageBackground } from 'react-native';

export default function App() {

  const [givenNumber, setGivenNumber] = useState();
  const [gameOver, setGameover] = useState(false);
  const [youWon,setYouWon]= useState(false);

  function userNumberhandler(userNumber){
    setGivenNumber(userNumber);
  }

  function gameOverHandler(){
    setGameover(true);
  }

  function youWonHandler(){
    setYouWon(true);
  }

  function homeHandler(){
    setGivenNumber();
    setGameover(false);
    setYouWon(false);
  }
  

  let screen=<StartPage onUserNumber={userNumberhandler}/>

  if(givenNumber){
     screen=<GamePage kuduthaNumber={givenNumber} onGameOver={gameOverHandler} onGameWon={youWonHandler}/>
  }
  if(gameOver){
      screen=<GameOver onHome={homeHandler} kuduthaNumber={givenNumber}/>
  }
  if(youWon){
      screen=<YouWon onHome={homeHandler} kuduthaNumber={givenNumber}/>
  }

  return (
    
    <LinearGradient colors={["#ff3131","#000000"]} style={styles.container}>
      <ImageBackground source={require('./assets/Images/background.jpg')} resizeMode={"cover"} style={styles.container}
      imageStyle={styles.backgroundImg}>
      <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  backgroundImg:{
    opacity:0.2,
  }
});
