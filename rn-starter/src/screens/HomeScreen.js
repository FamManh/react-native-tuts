import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
    let n = 0;
    return (
        <View>
            <Text>Hey There!</Text>
            <Button
                onPress={() => navigation.navigate("Components")}
                title="Navigate to Component Screen"
            />
            <Button
                onPress={() => navigation.navigate("List")}
                title="Navigate to List Screen"
            />
            <Button
                onPress={() => navigation.navigate("Image")}
                title="Navigate to Image Screen"
            />
            <Button
                onPress={() => navigation.navigate("Counter")}
                title="Navigate to Counter Screen"
            />
            <Button
                onPress={() => navigation.navigate("Color")}
                title="Navigate to Color Screen"
            />
            <Button
                onPress={() => navigation.navigate("Square")}
                title="Navigate to Square Screen"
            />
            <Button
                onPress={() => navigation.navigate("SquareReducer")}
                title="Navigate to Square Reducer Screen "
            />
            <Button
                onPress={() => navigation.navigate("Text")}
                title="Navigate to Text Screen "
            />
            <Button
                onPress={() => navigation.navigate("Box")}
                title="Navigate to Box Screen "
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
