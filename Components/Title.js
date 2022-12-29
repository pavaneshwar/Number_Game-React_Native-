import { StyleSheet, View ,Text} from "react-native";

function Title({children}){
    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
    
}
export default Title;

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        margin:15,
        borderColor:"red",
        borderWidth:2,
        borderRadius:20,
        padding:7,
        textAlign:"center"
       }
});