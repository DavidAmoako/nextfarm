import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function RadioButton() {
    const [active, setActive] = useState(false)

    return (
        <TouchableOpacity onPress={() => { setActive(!active) }}>
            <View style={{
                justifyContent: "center",
                alignItems: 'center',
                width: 24,
                height: 24,
                borderColor: '#0C775D',
                borderWidth: 2,
                borderRadius: 12,
                marginHorizontal: 10,
            }}>
                <View style={{
                    width: 16,
                    height: 16,
                    borderRadius: 20,
                    backgroundColor: active ? "#0C775D" : "#DDDDDD",
                }}></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})