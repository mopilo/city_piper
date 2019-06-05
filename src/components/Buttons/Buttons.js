import React from "react";
import {} from "react-native";


export const Button = ({text, onPress = () => {}}) => (
    <TouchableOpacity onPress={onPress} style = {styles.button}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
)
