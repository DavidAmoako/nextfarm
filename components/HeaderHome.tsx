import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { router, Router } from 'expo-router'

export default function HeaderHome() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.subtitle}>Find your</Text>
                <Text style={styles.subtitle}>Favorite <Text style={styles.title}>Farm Product </Text></Text>
            </View>
            <TouchableOpacity activeOpacity={.5} onPress={() => { router.navigate('/settings') }}>
                <Image source={require('../assets/images/image.png')} style={styles.dp} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        color: "#000",
        textAlign: "left",
        fontWeight: "800"
    },
    subtitle: {
        fontSize: 20,
        color: "#000",
        textAlign: "left"
    },
    dp: {
        width: 48,
        height: 48,
        borderRadius: 10,
        resizeMode: "contain"
    }
})