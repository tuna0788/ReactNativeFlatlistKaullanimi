import { Text, View } from "react-native"

export const Foo = ({name, sorname, color}) => {
    return(
        <View style={{backgroundColor:color, width:250, height:100, borderRadius:10, alignItems:'center', justifyContent:'center', margin:5,}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>{name} {sorname}</Text>
        </View>
    )
}


