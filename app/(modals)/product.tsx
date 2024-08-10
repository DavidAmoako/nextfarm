import {
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    FlatList,
    View
} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { router, Router } from 'expo-router'
import ProductCard1 from '@/components/ProductCard1';
import HeaderSearchExtra from '@/components/HeaderSearchExtra';
import data from '@/Data/data.json'

export default function Product() {

    StatusBar.setBackgroundColor("#fff");

    const [products, setProducts] = useState(data.products);

    const handleLiked = (item: { id: number }) => {
        const newProducts = products.map((prod) => {
            if (prod.id === item.id) {
                return {
                    ...prod,
                    isLiked: true,
                }
            }
            return prod;
        });
        setProducts(newProducts);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderSearchExtra />
            <View style={{ flex: 1 }}>
                <FlatList
                    numColumns={2}
                    data={products}
                    renderItem={({ item, index }) => (<ProductCard1 item={item} handleLiked={handleLiked} />)}
                    contentContainerStyle={{
                        marginBottom: 20,
                        marginTop: 10
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})