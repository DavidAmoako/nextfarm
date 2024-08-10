import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Router } from 'expo-router'

export default function Next() {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={.5} style={styles.btn} onPress={() => { router.push('/checkout') }}>
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 13,
        paddingBottom: 24,
    },
    btn: {
        borderRadius: 39,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 17,
        backgroundColor: "#0C775D",
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: "#fff",
    },
})