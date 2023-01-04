import {View,Text,StyleSheet} from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

function GameOver({onHome,kuduthaNumber}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Sorry!!! you lose... The number is : {kuduthaNumber}</Text>
            <PrimaryButton press={onHome}>Home</PrimaryButton>  
        </View>

    );
}

export default GameOver;

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        margin:20
    }
  });