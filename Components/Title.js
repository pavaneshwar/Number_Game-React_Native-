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
        fontSize:25,
        fontWeight:"bold",
        margin:15,
        borderColor:"#0a07075b",
        borderWidth:4,
        borderRadius:20,
        paddingTop:8,
        paddingVertical:6,
        textAlign:"center",
        backgroundColor:"#fda31dff",
        width:350,
        justifyContent:'center',
        color:"#920000"
       },
});