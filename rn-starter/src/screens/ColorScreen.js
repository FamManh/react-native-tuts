import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    const addColor = () => {
        let colorsList = colors;
        colorsList.push(randomRgb());
        setColors(colorsList);
    }
    console.log(colors)
    return (
        <View>
            <Button
                onPress={() => setColors([...colors, randomRgb()])}
                title="Add color"
            />
            <FlatList
                keyExtractor={color=> color}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: item
                            }}
                        ></View>
                    );
                }}
                data={colors}
            ></FlatList>
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
    // return `rgb(0,255, 0)`;
}

export default ColorScreen
