import { ThemedText } from '@/components/ThemedText'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar
} from 'react-native'
import React from 'react'
import Onboarding from '@/components/Onboarding'
import { router, Router } from 'expo-router'

export default function TutorialPage() {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                showHideTransition={"fade"}
                hidden={false}
            />
            <Onboarding />
            <TouchableOpacity style={styles.button} onPress={() => { router.replace('/signIn') }}>
                <Text style={styles.text}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { router.replace('/signIn') }}>
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
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
        marginBottom: 50
    },
    text: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold"
    },
    loginText: {
        fontSize: 14,
        color: "#000",
        fontWeight: "semibold",
        marginBottom: 30
    },
    loginText1: {
        fontSize: 14,
        fontWeight: "semibold",
    },
})