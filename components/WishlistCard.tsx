import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native'
import React from 'react'
import { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router, Router } from 'expo-router';


export default function WishlistCard({ item }: { item: any }) {

    const [focused, setFocused] = useState(false);
    const RemoveAlert = () =>
        Alert.alert('Are You Sure?', 'You want to remove item from list', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'OK' },
        ]);

    return (
        <View style={{ width: "100%", marginBottom: 10 }}>
            <View style={styles.container}>
                <Image source={item.image} style={styles.image} />
                <View style={{ marginLeft: 10, width: "100%" }}>
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                        <Text style={styles.price}>${item.price}   <Text style={styles.discount}>{item.discount}</Text></Text>
                        <Pressable onPress={() => { setFocused(!focused) }} style={{ marginRight: 10 }}>
                            <FontAwesome name={focused ? 'star' : 'star-o'} size={20} color="orange" />
                        </Pressable>
                        <Text>2k Review</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignContent: "center" }}>
                        <Pressable onPress={RemoveAlert}>
                            <Text style={styles.remove}>Remove</Text>
                        </Pressable>
                        <Pressable style={{ marginLeft: "30%" }} onPress={() => { router.navigate('/cart') }}>
                            <MaterialCommunityIcons name="plus-circle" size={30} color="#0C775D" />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8

    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 16,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 5
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: "#0C775D",
        marginRight: 15
    },
    discount: {
        fontSize: 14,
        fontWeight: 'medium',
        color: "#000",
        textDecorationLine: 'line-through',
        fontStyle: "italic",
    },
    remove: {
        fontSize: 14,
        fontWeight: '600',
        color: "#FF0000",
        marginTop: 10,
        textTransform: 'uppercase'
    }
})