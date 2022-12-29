import { Pressable, Text, View ,StyleSheet} from "react-native";

function PrimaryButton({children,press}){

    return(
        <Pressable onPress={press}>
            <View style={styles.button}>
                <Text style={styles.textBtn}>{children}</Text>
            </View>
        </Pressable>
    );

}
export default PrimaryButton;

const styles = StyleSheet.create({
    button:{
        borderWidth:2,
        width:90,
        height:40, 
        borderRadius:10,
        margin:5,
        backgroundColor:'black',
        justifyContent:"space-around"
    },
    textBtn:{
        textAlign:"center",
        color:'#ffbd03',
        fontWeight:"bold",
        fontSize:16
    }
});