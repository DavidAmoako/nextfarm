import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router, Router } from 'expo-router';


export default function ProductCard1({ item, handleLiked }: { item: any, handleLiked: any }) {

    //const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={.5} style={styles.container} onPress={() => {
            router.navigate({
                pathname: '/items', params: {
                    image: item.image,
                    title: item.title,
                    price: item.price,
                    discount: item.discount,
                }
            })
        }}>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <Text style={styles.name}>{item.title}</Text>
            <Text style={[styles.name, { fontSize: 12, fontWeight: 400 }]}>Product Description</Text>
            <Text style={styles.price}>${item.price}{'    '}<Text style={styles.discount}>${item.discount}</Text></Text>
            <TouchableOpacity activeOpacity={0.5} style={styles.likeContainer} onPress={() => { handleLiked(item) }}>
                <Ionicons name={item?.isLiked ? 'heart' : 'heart-outline'} size={20} color={'red'} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 17,
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: 240,
        paddingHorizontal: 11,
        paddingTop: 8,
        paddingBottom: 15,
        marginHorizontal: 6,
        marginBottom: 15
    },
    coverImage: {
        borderRadius: 12,
        flex: 1,
        width: "100%",
        height: 173,
        marginBottom: 5
    },
    name: {
        fontSize: 14,
        fontWeight: "700",
        textAlign: "center"
    },
    price: {
        fontSize: 14,
        fontStyle: "italic",
        fontWeight: "700",
        color: "#0c775d",
        textAlign: "center",
    },
    discount: {
        fontSize: 12,
        textDecorationLine: "line-through",
        fontStyle: "italic",
        textAlign: "center",
        color: "#000",
    },
    likeContainer: {
        height: 25,
        width: 25,
        backgroundColor: "#fff",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 14,
        right: 17
    },

})