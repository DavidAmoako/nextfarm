import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Router } from 'expo-router'

export default function Product() {

    return (
        <View>
            <Text>product</Text>
            <TouchableOpacity>
                <Text>go to home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})