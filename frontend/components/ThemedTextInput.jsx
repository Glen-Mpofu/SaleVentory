import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const ThemedTextInput = ({ style, ...props }) => {
    return (
        <TextInput style={[styles.taInput, style]} {...props} />
    )
}

export default ThemedTextInput

const styles = StyleSheet.create({
    taInput: {
        width: 150,
        height: 50,
        borderColor: "#fb7185",
        borderWidth: 5,
        borderRadius: 100,
        color: "#fb7185",
        fontFamily: "Josefin",
        fontWeight: "bold",
        textAlign: "center",
        margin: 5
    }
})