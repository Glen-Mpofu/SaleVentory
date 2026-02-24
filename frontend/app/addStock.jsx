import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedHeading from '../components/ThemedHeading'
import { CameraView } from "expo-camera"
import { Ionicons } from '@expo/vector-icons';

const AddStock = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ThemedHeading>AddStock</ThemedHeading>
            <CameraView
                style={styles.camera}
                enableTorch={true}
                videoQuality="2160p"
                zoom={0}
                mute={true}
            >
                <TouchableOpacity style={styles.cameraBtn}>
                    <Ionicons name={"camera-outline"} size={30} color={"white"} />
                </TouchableOpacity>
            </CameraView>
        </SafeAreaView>
    )
}

export default AddStock

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1,
        flexDirection: "column"
    },
    cameraBtn: {
        backgroundColor: "#fb7185",
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        borderRadius: 100,
        verticalAlign: "middle"
    }
})