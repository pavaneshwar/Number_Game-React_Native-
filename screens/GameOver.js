import {View,Text, Pressable } from "react-native";

function GameOver(){
    return(
        <View>
            <Text>Sorry!!! you lose... The number is : </Text>
            <Pressable>Play again</Pressable>
        </View>

    );
}

export default GameOver;