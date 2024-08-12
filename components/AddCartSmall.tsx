import {
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { router, Router } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';

export default function AddandSubSmall() {

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
            <View style={styles.number}>
                <Pressable onPress={subtract}>
                    <Feather name="minus" size={18} color="black" />
                </Pressable>
                <Text style={{ fontSize: 18, fontWeight: '500', marginHorizontal: 15 }}>{number}</Text>
                <Pressable onPress={add}>
                    <Feather name="plus" size={18} color="black" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    number: {
        flexDirection: "row",
        width: 100,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
})