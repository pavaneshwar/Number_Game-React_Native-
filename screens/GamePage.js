import { Button, Text, View } from "react-native";

function GamePage(){

    return(
        <View>
            <View>
                <Text>RandomNumber Generated</Text>
                <Button title="Higher Number"/>
                <Button title="Lower Number"/>
            </View>
            <View>
                <Text>No. Of Tries:</Text>
                <Text>Logs</Text>
            </View>

        </View>
    );

}
export default GamePage;