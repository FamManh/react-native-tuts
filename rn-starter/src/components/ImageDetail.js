import React from 'react'
import { View, Text, Image } from 'react-native'

const ImageDetail = ({desc, imgSource}) => {
    return (
        <View>
            <Image source={imgSource}/>
            <Text>{desc}</Text>
        </View>
    );
}

export default ImageDetail
