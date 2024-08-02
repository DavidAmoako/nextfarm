import { ThemedText } from '@/components/ThemedText'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import Onboarding from '@/components/Onboarding'
import { router, Router } from 'expo-router'

export default function TutorialPage() {
    return (
        <View style={styles.container}>
            <Onboarding />
            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Text style={styles.text}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { router.push('/index1') }}>
                <ThemedText type='default' style={styles.loginText}>
                    Already registered?     <ThemedText type='link' style={styles.loginText1}>Login</ThemedText>
                </ThemedText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        elevation: 2,
        backgroundColor: "#141517",
        width: "90%",
        height: 60,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    text: {
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold"
    },
    loginText: {
        fontSize: 18,
        color: "#000",
        fontWeight: "semibold",
        marginBottom: 30
    },
    loginText1: {
        fontSize: 18,
        fontWeight: "semibold",
    },
})