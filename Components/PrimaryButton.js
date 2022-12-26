import { Pressable, Text, View ,StyleSheet} from "react-native";

function PrimaryButton({children}){

    function pressed(){
        console.log('hi');
    }


    return(
        <Pressable >
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
        width:60, 
        borderRadius:10,
    },
    textBtn:{
        textAlign:"center",
    }
});