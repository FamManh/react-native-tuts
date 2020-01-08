import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 21 },
        { name: "Friend #2", age: 22 },
        { name: "Friend #3", age: 23 },
        { name: "Friend #4", age: 24 },
        { name: "Friend #5", age: 25 },
        { name: "Friend #6", age: 26 },
        { name: "Friend #7", age: 27 },
        { name: "Friend #8", age: 28 }
    ];
    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item }) => (
                    <View style={styles.FlatListItem}>
                        <Text>{item.name}</Text>
                        <Text style={styles.age}>{item.age}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    FlatListItem: {
        backgroundColor: "red",
        color: "white",
        margin: 5,
        padding: 5,
        alignItems: "center"

    },
    age: {
    }
});

export default ListScreen
