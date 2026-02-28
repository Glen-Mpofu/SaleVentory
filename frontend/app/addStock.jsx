import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedHeading from '../components/ThemedHeading'
import { CameraView } from "expo-camera"
import { Ionicons } from '@expo/vector-icons';
import axios from "axios"
import { BASE_URL } from "@env"
import * as FileSystem from "expo-file-system/legacy";
import ThemedTextInput from '../components/ThemedTextInput'

const AddStock = () => {
    const [isFlashOn, setFlash] = useState(false)
    const cameraRef = useRef(null)
    const [image, setImage] = useState()
    const baseUrl = BASE_URL
    const [foodName, setFoodName] = useState(" ")
    const [costPerUnit, setCostPerUnit] = useState("")
    const [quantity, setQuantity] = useState(" ")


    async function captureImage() {
        if (cameraRef.current) {
            const options = { quality: 0.8, base64: true, skipProcessing: true, androidCaptureSound: false }
            const imageData = await cameraRef.current.takePictureAsync(options)
            setImage(imageData.uri)
            await classifyImage(imageData)
        }
    }

    async function classifyImage(imageData) {
        let photo;
        try {
            if (Platform.OS === "web") {
                // On web, access the base64 property directly
                photo = imageData.base64;
            } else {
                // On mobile, read from file system using the URI
                const base64Img = await FileSystem.readAsStringAsync(imageData.uri, {
                    encoding: "base64",
                });
                photo = base64Img;
            }

            if (!photo) {
                console.error('No base64 data available');
                return;
            }

            const response = await axios.post(`${baseUrl}/classifyImage`, { image: photo });

            if (response.data.status === "ok") {
                setFoodName(response.data.data.name);
            }
        } catch (error) {
            console.error('Classification error:', error.response?.data || error.message);
        }
    }

    async function saveFoodItem() {

    }

    return (
        <SafeAreaView style={styles.container}>

            {!image ? (
                <CameraView
                    style={styles.camera}
                    enableTorch={isFlashOn}
                    videoQuality="2160p"
                    zoom={0}
                    mute={true}
                    ref={cameraRef}
                >
                    <ThemedHeading>AddStock</ThemedHeading>
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
                    <View style={{ flexDirection: "row" }}>
                        <ThemedTextInput value={foodName} onChangeText={setFoodName} />
                        <ThemedTextInput value={costPerUnit} onChangeText={setCostPerUnit} keyboardType={"numeric"} />
                        <ThemedTextInput value={quantity} onChangeText={setQuantity} keyboardType={"numeric"} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.cameraBtn}
                            onPress={() => setImage(null)}
                        >
                            <Ionicons name={"arrow-redo-outline"} size={30} color={"white"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cameraBtn}
                            onPress={() => saveFoodItem()}
                        >
                            <Ionicons name={"checkmark-outline"} size={30} color={"white"} />
                        </TouchableOpacity>
                    </View>

                </View>
            )}

        </SafeAreaView>
    )
}

export default AddStock

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tan"
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
        alignItems: 'center',
        backgroundColor: "tan"
    },
    previewImage: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain'
    },
})