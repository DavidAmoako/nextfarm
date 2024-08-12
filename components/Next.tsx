import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Router } from 'expo-router'

export default function Next() {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={.5} style={styles.btn} onPress={() => { router.push('/checkout') }}>
                <Text style={styles.text}>Checkout</Text>
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
        paddingBottom: 16,
    },
    btn: {
        borderRadius: 40,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        backgroundColor: "#0C775D",
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: "#fff",
    },
})