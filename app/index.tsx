import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native'
import { router, Router } from 'expo-router'

export default function StartScreen() {
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                animated={true}
                backgroundColor="#159e42"
                showHideTransition={"fade"}
                hidden={false}
            />
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <Text style={styles.logoText}><Text style={styles.the}>The</Text>NextFarm</Text>
            </View>
            <TouchableOpacity activeOpacity={.5} style={styles.button} onPress={() => { router.push('/tutorial') }}>
                <Text style={styles.text}>Consumer</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.button} onPress={() => { router.push('/tutorial') }}>
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
        fontSize: 10,
        padding: 20,
        marginTop: 20,
        textAlign: "center"
    },
    button: {
        elevation: 2,
        backgroundColor: "#fff",
        width: "90%",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    text: {
        fontSize: 14,
        color: "#159e42",
        fontWeight: "bold"
    },
    registerText: {
        fontSize: 14,
        color: "#000",
        fontWeight: "semibold",
    },
    registerText1: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "semibold",
    },
    logoContainer: {
        marginBottom: 100,
        alignItems: "center"
    },
    logoText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff"
    },
    logo: {
        width: 250,
        height: 250,
        resizeMode: "contain"
    },
    the: {
        color: "#ff5e03",
    }

})