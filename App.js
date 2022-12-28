import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
     screen=<GamePage/>
  }

  return (
    <View>
      {screen}
      {/* <YouWon/> */}
      {/* <GameOver/> */}
    </View>
  );
}

const styles = StyleSheet.create({
 
});
