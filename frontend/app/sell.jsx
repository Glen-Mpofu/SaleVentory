import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedText from '../components/ThemedText'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedHeading from '../components/ThemedHeading'

const SellStock = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ThemedHeading>SellStock</ThemedHeading>
        </SafeAreaView>
    )
}

export default SellStock

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})