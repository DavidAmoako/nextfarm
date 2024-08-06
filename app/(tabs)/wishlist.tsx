import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Pressable,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import HeaderExtraSearch from '@/components/HeaderExtraSearch';
import CategoryScroll from '@/components/CategoryScroll';



export default function Wishlist() {
    StatusBar.setBackgroundColor("#fff");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderExtraSearch header='Wishlist' />
            <View style={{ marginHorizontal: 10 }}>
                <CategoryScroll />
                <Text>wishlist</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})