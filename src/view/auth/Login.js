import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
// import PropTypes from "prop-types";

export default class Login extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})
