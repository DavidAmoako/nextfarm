import {
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { router, Router } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';

export default function Product() {

    StatusBar.setBackgroundColor("#fff");
    const [number, setNumber] = useState(0);

    const add = () => {
        if (number < 10) {
            setNumber(number + 1);
        }
    };
    const subtract = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };

    return (
        <View>
            <View style={styles.btnContainer}>
                <View style={styles.number}>
                    <Pressable onPress={subtract}>
                        <Feather name="minus" size={24} color="black" />
                    </Pressable>
                    <Text style={{ fontSize: 22, fontWeight: '500', marginHorizontal: 15 }}>{number}</Text>
                    <Pressable onPress={add}>
                        <Feather name="plus" size={24} color="black" />
                    </Pressable>
                </View>
                <TouchableOpacity activeOpacity={.5} style={styles.btn}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: "#fff" }}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 13,
        paddingBottom: 24,
    },
    number: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
    },
    btn: {
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 15,
        backgroundColor: "#0C775D",
        borderRadius: 39,
        width: 250,
        marginHorizontal: 20,
    },
})