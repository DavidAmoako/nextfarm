import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image
} from 'react-native'

export default function index() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <ThemedText type='subtitle'>Welcome to the</ThemedText>
                <ThemedText type='subtitle'>TheNextFarm App</ThemedText>
                <Image style={styles.logo} source={require('../assets/images/adaptive-icon.png')} />
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Login</Text>
                <ThemedText type='link' style={styles.inputText}>Mobile Number</ThemedText>
                <ThemedText type='link' style={styles.inputText}>Password</ThemedText>
            </View>
            <View style={styles.forgotPassword}>
                <ThemedText type='link'> Forgot Password?</ThemedText>
            </View>
            <Pressable style={styles.button} onPress={() => { }}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <View>
                <ThemedText type='default' style={styles.loginText}>
                    Are you new to this app?     <ThemedText type='link' style={styles.registerText} onPress={() => { }}>Register</ThemedText>
                </ThemedText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginContainer: {

    },
    headerContainer: {
        alignSelf: "center",
        marginBottom: 30,
        marginTop: 50
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginRight: 20,
        marginBottom: 20
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
    loginText: {
        fontWeight: "semibold",
        fontSize: 18
    },
    inputText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonText: {
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold"
    },
    registerText: {
        fontSize: 18,
        fontWeight: "semibold",
    },
    logo: {
        width: 250,
        height: 250,
        resizeMode: "contain",
        marginBottom: 30
    },

})