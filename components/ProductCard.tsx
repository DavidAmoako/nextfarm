import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import { router, Router } from 'expo-router'

export default function ProductCard({ item }: { item: any }) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={() => { router.replace('/shop') }}>
            <Image source={item.image} style={styles.productImage} />
            {/* <Image source={require('../assets/images/contamination.png')} style={styles.productImage} /> */}
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={[styles.productName, styles.margin]}>(L)</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        backgroundColor: "#fff",
        height: 210,
        width: 160,
        borderColor: "grey",
        borderWidth: .5,
        paddingHorizontal: 8,
        paddingTop: 8,
        borderRadius: 17,
        marginHorizontal: 6,
    },
    productImage: {
        width: "100%",
        height: 150,
        resizeMode: "cover",
        borderRadius: 15
    },
    productName: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        marginHorizontal: 10,
    },
    margin: {
        marginBottom: 20
    },
})