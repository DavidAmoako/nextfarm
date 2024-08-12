import {
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';

export default function AddandSub() {

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
                    <Feather name="minus" size={22} color="black" />
                </Pressable>
                <Text style={{ fontSize: 20, fontWeight: '500', marginHorizontal: 15 }}>{number}</Text>
                <Pressable onPress={add}>
                    <Feather name="plus" size={22} color="black" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    number: {
        flexDirection: "row",
        width: 120,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
})