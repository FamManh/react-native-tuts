import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState("");
    const id = navigation.getParam("id");

    const getResult = async id => {
        const response = await yelp.get(id);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    const renderImages = () => {
        if (result.photos) {
            return result.photos.map((item, key) => (
                <Image style={styles.image} key={key} source={{ uri: item }} />
            ));
        }
        return null;
    };

    return (
        <View>
            {result ? (
                <>
                    <Text style={styles.title}>{result.name}</Text>
                    <Text style={styles.desc}>
                        {result.rating} Stars, {result.review_count} Reviews
                    </Text>
                    <FlatList
                        keyExtractor={result => result}
                        data={result.photos}
                        renderItem={({ item }) => (
                            <Image
                                style={styles.image}
                                source={{ uri: item }}
                            />
                        )}
                    />
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        height: 200
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center'
    },
    desc: {
        color: '#d5d5d5',
        alignSelf: "center"
    }
});

export default ResultsShowScreen;
