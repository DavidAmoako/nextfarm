import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import { router, Router } from 'expo-router'

export default function StartScreen() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <Text style={styles.logoText}><Text style={styles.the}>The</Text>NextFarm</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { router.replace('/tutorial') }}>
                <Text style={styles.text}>Consumer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { router.replace('/tutorial') }}>
                <Text style={styles.text}>Farmer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <ThemedText type='default' style={styles.registerText}>
                    Are you new to this app?     <ThemedText type='link' style={styles.registerText1}>Register</ThemedText>
                </ThemedText>
            </TouchableOpacity>
            <Text style={styles.copyright}>© 2024 TheNextFarm</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#159e42",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    copyright: {
        color: "#fff",
        fontSize: 14,
        padding: 20,
        marginTop: 20,
        textAlign: "center"
    },
    button: {
        elevation: 2,
        backgroundColor: "#fff",
        width: "90%",
        height: 60,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    text: {
        fontSize: 19,
        color: "#159e42",
        fontWeight: "bold"
    },
    registerText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "semibold",
    },
    registerText1: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "semibold",
    },
    logoContainer: {
        marginBottom: 100,
        alignItems: "center"
    },
    logoText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#fff"
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    },
    the: {
        color: "#ff5e03",
    }

})