import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather style={styles.searchIcon} name="search" />
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
                autoCorrect={false}
                autoCapitalize="none"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#f0eeee",
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: "row"
    },
    searchInput: {
        fontSize: 14,
        padding: 10,
        flex: 1
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 15,
        marginRight: 0,
        fontSize: 20
    }
});

export default SearchBar;
