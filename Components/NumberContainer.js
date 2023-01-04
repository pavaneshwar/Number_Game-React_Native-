import {Text, View ,StyleSheet} from "react-native";

function NumberContainer({children}){

    return(
            <View>
                <Text style={styles.numberArea}>{children}</Text>
            </View>
    );

}
export default NumberContainer;

const styles = StyleSheet.create({
    numberArea:{
        marginTop:5,
        paddingBottom:2,
        width:70,
        textAlign:'center',
        marginBottom:7,
        fontSize:50,
        fontWeight:"bold",
        color:"#ffbb00ff"
    }
});