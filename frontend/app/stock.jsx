import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ThemedText from '../components/ThemedText'
import { Ionicons } from '@expo/vector-icons';
import ThemedView from '../components/ThemedView';
import ThemedHeading from '../components/ThemedHeading';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stock = ({ setActivetab }) => {
    const tabHeight = 60
    const router = useRouter()
    return (
        <SafeAreaView style={styles.container}>
            <ThemedHeading>Available Stock</ThemedHeading>
            <ScrollView style={styles.scrollView}>
                <View style={styles.stockCard}>
                    <View style={styles.cardTextContainer}>
                        <ThemedText>Name: </ThemedText>
                        <ThemedText>Quantity: </ThemedText>
                        <ThemedText>Sold: </ThemedText>
                    </View>
                </View>
            </ScrollView>
            <View style={[styles.iconContainer, { bottom: tabHeight, paddingRight: 10 }]}>
                <TouchableOpacity onPress={() => setActivetab("addStock")}>
                    <Ionicons name="add-circle-outline" size={50} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Stock

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    iconContainer: {
        position: "absolute",
        width: "100%",
        alignItems: "flex-end"
    },
    scrollView: {
        backgroundColor: "tan",
        borderRadius: 10
    },
    stockCard: {
        height: 100,
        width: "75%",
        backgroundColor: "grey",
        borderRadius: 30,
        margin: 5
    },
    cardTextContainer: {
        padding: 10,
        justifyContent: "center",
        flex: 1,
        letterSpacing: 2
    }
})