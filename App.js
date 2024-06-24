import { Button, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { Images } from './Images';
import { Message } from './Message/Message';
import { MessageList } from './MessgeList/MessageList';



export default function App() {

  return (
    <View style={styles.container}>


      <MessageList />


    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});