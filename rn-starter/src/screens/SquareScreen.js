import React, { useState } from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_CHANGE = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(150);
    const [green, setGreen] = useState(150);
    const [blue, setBlue] = useState(150);

    const setColor = (color, change) => {
        switch (color) {
            case "red":
                change > 256 || change < 0
                    ? null
                    : setRed(change);
                return;
            case "green":
                change > 256 || change < 0
                    ? null
                    : setGreen(change);
                return;
            case "blue":
                change > 256 || change < 0
                    ? null
                    : setBlue(change);
                return;
        }
    };

    return (
        <View>
            <ColorCounter
                color="Red"
                value={red}
                onIncrease={() => setColor("red", red + COLOR_CHANGE)}
                onDecrease={() => setColor("red", red -COLOR_CHANGE)}
            />
            <ColorCounter
                color="Green"
                value={green}
                onIncrease={() => setColor("green", green + COLOR_CHANGE)}
                onDecrease={() => setColor("green", green -COLOR_CHANGE)}
            />
            <ColorCounter
                color="Blue"
                value={blue}
                onIncrease={() => setColor("blue", blue + COLOR_CHANGE)}
                onDecrease={() => setColor("blue", blue -COLOR_CHANGE)}
            />

            <View style={{ alignItems: "center", margin: 10 }}>
                <View
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: `rgb(${red}, ${green}, ${blue})`
                    }}
                ></View>
            </View>
        </View>
    );
};

export default SquareScreen;
