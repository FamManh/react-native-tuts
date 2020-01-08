import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                desc="Forest"
                imgSource={require("../../assets/forest.jpg")}
            />
            <ImageDetail
                desc="Beach"
                imgSource={require("../../assets/beach.jpg")}
            />
            <ImageDetail
                desc="Mountain"
                imgSource={require("../../assets/mountain.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default ImageScreen
