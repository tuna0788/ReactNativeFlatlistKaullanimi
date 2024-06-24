import { useState } from "react";
import { Button, Text, View } from "react-native";

export const Counter = ({start}) => {
    const  [counter, setCounter] = useState(start);
    return(
        <View style={{backgroundColor:'#FFF9DA', width:300, height:200, justifyContent:'center', alignItems:'center', borderRadius:10, margin:10}}>
            <Text style={{fontSize:40, fontWeight:'bold'}}>{counter}</Text>
            <Button title="Increase" onPress={() => setCounter(counter + 1)} />
            <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
        </View>
    );
}