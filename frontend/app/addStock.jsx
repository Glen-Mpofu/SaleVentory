import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedHeading from '../components/ThemedHeading'
import { CameraView } from "expo-camera"
import { Ionicons } from '@expo/vector-icons';

const AddStock = () => {
    const [isFlashOn, setFlash] = useState(false)
    const cameraRef = useRef(null)
    const [image, setImage] = useState(null)
    async function captureImage() {
        if (cameraRef.current) {
            const options = { quality: 0.8, base64: true, skipProcessing: true, androidCaptureSound: false }
            const imageData = await cameraRef.current.takePictureAsync(options)
            setImage(imageData.uri)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ThemedHeading>AddStock</ThemedHeading>
            {!image ? (
                <CameraView
                    style={styles.camera}
                    enableTorch={isFlashOn}
                    videoQuality="2160p"
                    zoom={0}
                    mute={true}
                    ref={cameraRef}
                >
                    <View style={[styles.btnView, { position: "absolute", bottom: 60 }]}>
                        <TouchableOpacity style={styles.cameraBtn}
                            onPress={async () => await captureImage()}
                        >
                            <Ionicons name={"camera-outline"} size={30} color={"white"} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cameraBtn}
                            onPress={() => {
                                if (isFlashOn === true) {
                                    setFlash(false)
                                } else {
                                    setFlash(true)
                                }
                            }}
                        >
                            <Ionicons name={isFlashOn ? "flash" : "flash-off-outline"} size={30} color={"white"} />
                        </TouchableOpacity>
                    </View>

                </CameraView>
            ) : (
                <View style={styles.previewContainer}>
                    <Image source={{ uri: image }} style={styles.previewImage} />
                    <TouchableOpacity style={styles.cameraBtn}
                        onPress={() => setImage(null)}
                    >
                        <Ionicons name={"arrow-redo-outline"} size={30} color={"white"} />
                    </TouchableOpacity>
                </View>
            )}

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
        alignItems: "center",
        width: 100,
        borderRadius: 100,
        verticalAlign: "middle",
        padding: 5,
        margin: 5
    },
    btnView: {
        flexDirection: "row",
        alignSelf: "center",
        verticalAlign: "bottom"
    },
    previewContainer: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    previewImage: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain'
    },
})