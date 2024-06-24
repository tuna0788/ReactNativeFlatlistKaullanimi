import { FlatList, View } from "react-native";
import { faker } from '@faker-js/faker';
import { Message } from "../Message/Message";

export const MessageList = () => {
    const data = Array(40).fill(null).map(e => ({

        id: faker.string.uuid(),
        avatar: faker.image.avatarLegacy(),
        name: faker.person.fullName(),
        message: faker.lorem.sentence(),
        news: faker.number.int() % 5,
        online: faker.datatype.boolean(),

    }));

    return (
        <View style={{width:'90%'}}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <Message
                        name={item.name}
                        avatar={item.avatar}
                        message={item.message}
                        news={item.news}
                        online={item.online}
                    />}
            />
        </View>
    );
}