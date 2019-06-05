import React from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";


export const ButtonContainer = ({text, onPress = () => {}}) => (
    <TouchableOpacity onPress={onPress} style = {styles.button}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    text: {
        padding: 10
    }
})