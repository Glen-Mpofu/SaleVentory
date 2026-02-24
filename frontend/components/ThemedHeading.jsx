import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ThemedHeading = ({ style, ...props }) => {
    return (
        <Text style={[styles.heading, style]} {...props} />
    )
}

export default ThemedHeading

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontFamily: "Josefin"
    }
})