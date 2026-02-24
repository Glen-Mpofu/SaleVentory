import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font"
import { Slot } from 'expo-router'
import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons';

const RootLayout = () => {
    const [loaded] = useFonts({
        Josefin: require("../assets/fonts/JosefinSans-VariableFont_wght.ttf")
    })
    return (
        <View>
            
        </View>
    )
}

export default RootLayout

const styles = StyleSheet.create({})