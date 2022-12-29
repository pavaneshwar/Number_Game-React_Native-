import {Text, View ,StyleSheet} from "react-native";

function NumberContainer({children}){

    return(
            <View>
                <Text>{children}</Text>
            </View>
    );

}
export default NumberContainer;

const styles = StyleSheet.create({
   
});