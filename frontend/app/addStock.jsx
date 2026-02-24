import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedHeading from '../components/ThemedHeading'
import { CameraView } from "expo-camera"

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
        flex: 1
    }
})