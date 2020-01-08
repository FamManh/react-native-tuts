import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const name = "Manh";

    const renderName = () => <Text style={styles.desc}>My name is {name}</Text>

    return (
        <View>
            <Text style={styles.title}>Getting started with react native</Text>
            {renderName()}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    },
    desc: {
        fontSize: 20,
        color: 'red'
    }
});

export default ComponentScreen;
