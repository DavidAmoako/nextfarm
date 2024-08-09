import {
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import { router, Router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HeaderExtraCart({ header }: { header: string }) {

    const goBack = () => {
        if (router.canGoBack()) {
            router.back()
        } else {
            router.navigate('/(tabs)')
        }
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.icon} onPress={() => { goBack() }}>
                <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
            </Pressable>
            <View style={styles.header}>
                <Text style={styles.headerText}>{header}</Text>
            </View>
            <Pressable style={styles.icon} onPress={() => { router.push('/cart') }}>
                <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 5,
    },
    icon: {
        width: 45,
        height: 45,
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#141517",
    }
})