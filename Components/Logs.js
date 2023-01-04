import {Text, View ,StyleSheet} from "react-native";

function Logs({number,guess}){

    return(
        
            <View style={styles.overall}>
                    <Text style={styles.textArea}>#{number} </Text>
                    <Text style={styles.textArea}>Computer's Guess: {guess}</Text> 
            </View>
    );

}
export default Logs;

const styles = StyleSheet.create({
    overall:{
        backgroundColor:"#2d144d",
        width:350,
        padding:5,
        margin:5,
        borderRadius:10,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        borderRadius:10
    },
    textArea:{
        fontSize:17,
        color:"#b983ff",
        fontWeight:"500"
    }

});