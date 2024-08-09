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
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { router, Router } from 'expo-router'
import HeaderSearchExtra from '@/components/HeaderSearchExtra';
import AddandSub from '@/components/AddCart';

export default function Product() {

    StatusBar.setBackgroundColor("#fff");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderSearchExtra />
            <View style={{ flex: 1 }}>
                <Text>yes babe</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})