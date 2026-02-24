import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ThemedView = ({ style, ...props }) => {
    return (
        <View style={[styles.viewStyle, style]} {...props} />
    )
}

export default ThemedView

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        flexDirection: "column"
    }
})