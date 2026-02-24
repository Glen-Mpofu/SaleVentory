import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from "expo-font"
import { Slot } from 'expo-router'
import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons';
import Home from "./index"
import AddStock from "./addStock"
import Stock from "./stock"
import Sell from "./sell"
import ThemedText from '../components/ThemedText'

const RootLayout = () => {
    const [loaded] = useFonts({
        Josefin: require("../assets/fonts/JosefinSans-VariableFont_wght.ttf")
    })
    const [activeTab, setActivetab] = useState("home")
    return (
        <View style={styles.container}>
            {activeTab === 'home' && <Home />}
            {activeTab === 'stock' && <Stock setActivetab={setActivetab} />}
            {activeTab === 'sell' && <Sell />}
            {activeTab === 'addStock' && <AddStock setActivetab={setActivetab} />}

            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tab} onPress={() => setActivetab("home")}>
                    <View style={{ alignItems: "center", width: "100%" }}>
                        <Ionicons name="home" size={30} color={activeTab === "home" ? "#800080" : "#f8fafc"} />
                        <ThemedText style={{ color: activeTab === "home" ? "#800080" : "#f8fafc" }}>Home</ThemedText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setActivetab("stock")}>
                    <View style={{ alignItems: "center", width: "100%" }}>
                        <Ionicons name="clipboard-outline" size={30} color={activeTab === "stock" ? "#800080" : "#f8fafc"} />
                        <ThemedText style={{ color: activeTab === "stock" ? "#800080" : "#f8fafc" }}>Stock</ThemedText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setActivetab("sell")}>
                    <View style={{ alignItems: "center", width: "100%" }}>
                        <Ionicons name="pricetag" size={30} color={activeTab === "sell" ? "#800080" : "#f8fafc"} />
                        <ThemedText style={{ color: activeTab === "sell" ? "#800080" : "#f8fafc" }}>Sell</ThemedText>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF4E3"
    },
    tabBar: {
        flexDirection: "row",
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        backgroundColor: '#DCA1A1',
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    tab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})