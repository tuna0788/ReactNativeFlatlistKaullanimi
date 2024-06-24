import { View, Image, Text } from "react-native";

export const Message = (props) => {
    const { name, avatar, news, message, online } = props;
    return (

        <View style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            padding: 2,
            marginTop: 5,
            marginBottom:5
           
        }}>

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 3, borderColor: 'gray' }} source={{ uri: avatar }} />

                {
                    online && (<View style={{
                        width: 15,
                        height: 15,
                        backgroundColor: 'green',
                        borderRadius: 7,
                        position: 'absolute',
                        right: 5,
                        bottom: 10,
                        borderWidth: 2,
                        borderColor: 'white'
                    }}></View>)
                }
            </View>
            <View style={{ flex: 3, justifyContent: 'center', paddingLeft:5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>{message}</Text>
            </View>
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
               {
                news > 0 && 
                <View style={{backgroundColor:'red', width:30,      height:30, borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:15, color:'white',fontWeight:'bold'}}>{news}</Text>
                </View>
               }
            </View>
        </View>
    );
}