import React from 'react'
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, value, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text style={styles.title}>
                {color} {value}
            </Text>
            <Button title={`More ${color}`} onPress={() => onIncrease()} />
            <Button title={`Less ${color}`} onPress={() => onDecrease()} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 40
    }
});

export default ColorCounter
