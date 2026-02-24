import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedHeading from '../components/ThemedHeading'
import ThemedText from '../components/ThemedText'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ThemedHeading>SaleVentory</ThemedHeading>
            <ThemedText>manage and sell your st0ck</ThemedText>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})