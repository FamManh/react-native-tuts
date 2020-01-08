import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewParentStyle}>
            <View style={styles.viewOne}>
                <View style={styles.viewSquareOne}></View>
                <View style={styles.viewSquareTwo}></View>
            </View>
            <View style={styles.viewTwo}>
                <View style={styles.viewSquareThree}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewParentStyle: {
        height: 100
    },
    viewOne: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewTwo: {
        flexDirection: "row",
        justifyContent: "center"
    },
    viewSquareOne: {
        height: 50,
        width: 50,
        backgroundColor: "red"
    },
    viewSquareTwo: {
        height: 50,
        width: 50,
        backgroundColor: "green"
    },
    viewSquareThree: {
        height: 50,
        width: 50,
        backgroundColor: "blue"
    }
});

export default BoxScreen;


/**
 * alignItem || justifyContent (on parent -- flex direction column)
 * stretch
 * flex-start
 * center
 * flex-end
 */


/**
 * flexDirection (on parent)
 * column
 * row
 */


 /**
  * flex value
  * on parent: justifyContent, alignItem, flexDirection
  * on child: flex, alignSelf
  */

/**
 * Trick fill view
 * #1 
 * position: "ablsolut",
 * left: 0,
 * right: 0,
 * top: 0,
 * bottom: 0
 * 
 * 
 * #2
 * ...StyleSheet.absoluteFillObject
 */

/**
 * Absolute:
 * - Apply some flex box rules, ignore all siblings
 * - Apply top, left, right, bottom
 * 
 * Relative:
 * - Apply all flex box rules, considering siblings
 * - Place element inside parent
 * - Apply top, left, right, bottom
 */