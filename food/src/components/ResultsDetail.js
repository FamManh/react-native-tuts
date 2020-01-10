import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultsDetail = ({ result }) => {
    
    return (
        
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: result.image_url }}
                />
                <Text style={styles.title}>{result.name}</Text>
                <Text style={styles.desc}>
                    {result.rating} Starts, {result.review_count} Reviews
                </Text>
            </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: 250,
        marginLeft: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 16
    },
    desc: {
        color: "#5d5d5d"
    },
    image: {
        height: 150,
        borderRadius: 5,
        marginBottom: 3
    }
});

export default ResultsDetail
