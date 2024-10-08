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
import AddandSubSmall from './AddCartSmall';



export default function CartCard({ item }: { item: any }) {

    const [focused, setFocused] = useState(false);
    const DeleteAlert = () =>
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
                <View style={{ marginLeft: 15, width: "100%" }}>
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
                        <Text style={styles.price}>${item.price}   <Text style={styles.discount}>{item.discount}</Text></Text>
                        <Pressable onPress={() => { setFocused(!focused) }} style={{ marginRight: 10 }}>
                            <FontAwesome name={focused ? 'star' : 'star-o'} size={20} color="orange" />
                        </Pressable>
                        <Text>2k Review</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignContent: "center" }}>
                        <AddandSubSmall />
                        <Pressable style={{ marginLeft: "15%" }} onPress={DeleteAlert}>
                            <MaterialCommunityIcons name="delete-circle-outline" size={30} color="#FF3131" />
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
        padding: 10

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 5
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
        color: "#0C775D",
        marginRight: 20
    },
    discount: {
        fontSize: 14,
        fontWeight: 'medium',
        color: "#000",
        textDecorationLine: 'line-through',
        fontStyle: "italic",
    },
})