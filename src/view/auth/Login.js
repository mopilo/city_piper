import React, { Component } from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import {ButtonContainer} from "../../components/Buttons/Buttons"
// import PropTypes from "prop-types";

export default class Login extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={styles.top}>
                        <ButtonContainer style={{padding: 10}} text= {"SKIP"}/>
                    </View>
                    <View style={{flex: 2, backgroundColor: "purple"}}>

                    </View>
                    <View style={{flex: 6, backgroundColor: "yellow"}}>

                    </View>
                    {/* <View style={{flex: 2, backgroundColor: "pink"}}>

                    </View> */}
                    <View style={{flex: 0.5, backgroundColor: "green"}}>

                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 0.4, 
        alignItems: "flex-end",
        backgroundColor: 'red'
    }
})
