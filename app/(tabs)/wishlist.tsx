import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import HeaderExtraSearch from '@/components/HeaderExtraSearch';
import CategoryScroll from '@/components/CategoryScroll';
import WishlistCard from '@/components/WishlistCard';
import wishlist from '@/Data/wishlist';



export default function Wishlist() {
    StatusBar.setBackgroundColor("#fff");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderExtraSearch header='Wishlist' />
            <View style={{ marginHorizontal: 10 }}>
                <CategoryScroll />
                <FlatList
                    data={wishlist}
                    renderItem={({ item }) => (<WishlistCard item={item} />)}
                    contentContainerStyle={{
                        marginBottom: 10,
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})