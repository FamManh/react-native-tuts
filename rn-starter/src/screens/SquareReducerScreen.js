import React, { useReducer } from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;
const COLOR_DECREMENT = -10;

const reducer = (state, action) => {
    let amount = 0;
    switch (action.type) {
        case "CHANGE_RED":
            amount =
                state.red + action.payload > 256 ||
                state.red + action.payload < 0
                    ? 0
                    : action.payload;
            return { ...state, red: state.red + amount };
        case "CHANGE_GREEN":
            amount =
                state.green + action.payload > 256 ||
                state.green + action.payload < 0
                    ? 0
                    : action.payload;
            return { ...state, green: state.green + amount };
        case "CHANGE_BLUE":
            amount =
                state.blue + action.payload > 256 ||
                state.blue + action.payload < 0
                    ? 0
                    : action.payload;
            return { ...state, blue: state.blue + amount };
        default:
            return state;
    }
};

const SquareReducerScreen = () => {
    const [state, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0
    });
    // console.log(state);
    return (
        <View>
            <ColorCounter
                color="Red"
                value={state.red}
                onIncrease={() =>
                    dispatch({ type: "CHANGE_RED", payload: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({ type: "CHANGE_RED", payload: COLOR_DECREMENT })
                }
            />
            <ColorCounter
                color="Green"
                value={state.green}
                onIncrease={() =>
                    dispatch({ type: "CHANGE_GREEN", payload: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({ type: "CHANGE_GREEN", payload: COLOR_DECREMENT })
                }
            />
            <ColorCounter
                color="Blue"
                value={state.blue}
                onIncrease={() =>
                    dispatch({ type: "CHANGE_BLUE", payload: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({ type: "CHANGE_BLUE", payload: COLOR_DECREMENT })
                }
            />

            <View style={{ alignItems: "center", margin: 10 }}>
                <View
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
                    }}
                ></View>
            </View>
        </View>
    );
};

export default SquareReducerScreen;
