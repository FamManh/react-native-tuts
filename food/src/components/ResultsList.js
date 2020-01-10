import React from "react";
import { withNavigation } from "react-navigation";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("ResultsShow", {
                                id: item.id
                            })
                        }
                    >
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )}
            />
            {/* {!!results.length && (
                <View>
                    <Image source={results[0].image_url} />

                    <Text>{results[0].image_url}</Text>
                    
                    <Text>{results[0].url}</Text>
                </View>
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        marginHorizontal: 10,
        fontSize: 25,
        fontWeight: "600"
    }
});

export default withNavigation(ResultsList);
