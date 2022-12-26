
import { StyleSheet, Text, View } from 'react-native';
import GameOver from './screens/GameOver';
import GamePage from './screens/GamePage';
import StartPage from './screens/StartPage';
import YouWon from './screens/YouWon';

export default function App() {
  return (
    <View >
      <StartPage/>
      {/* <GamePage/> */}
      {/* <YouWon/> */}
      {/* <GameOver/> */}
    </View>
  );
}

const styles = StyleSheet.create({
 
});
