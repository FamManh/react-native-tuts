import React, {useReducer} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 };
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 };
        default:
            break;
    }    
}

const CountScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0})

    return (
        <View>
            <Button
                onPress={() => dispatch({ type: "INCREMENT" })}
                title="Increase"
            ></Button>
            <Button
                onPress={() => dispatch({ type: "DECREMENT" })}
                title="Decrease"
            ></Button>
            <View style={styles.center}>
                <Text>Current count</Text>
                <Text style={styles.count}>{state.counter}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    count: {
        fontSize: 50,
        fontWeight: "bold",
        alignContent: "center"
    },
    center: {
        alignItems: "center"
    }
});

export default CountScreen
