import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import { router, Router } from 'expo-router'

export default function Product({ item }: { item: any }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={.5} style={styles.card} onPress={() => { router.navigate('/product') }}>
                <Text style={styles.text}>{item.name}</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={item.image} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        elevation: 2,
        backgroundColor: '#fff',
        width: '90%',
        height: 210,
        borderRadius: 15,
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 15
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 30,
        marginBottom: 10

    },
    imageContainer: {
        width: '100%',
        marginBottom: 35,
        justifyContent: 'center',
        alignItems: 'center',
    }
})