import {
    View,
    Text,
    StyleSheet,
    FlatList,
    StatusBar
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Next from '@/components/Next';
import HeaderExtraSearch from '@/components/HeaderExtraSearch';
import CartCard from '@/components/CartCard';
import wishlist from '@/Data/wishlist';



export default function ShopCartScreen() {

    StatusBar.setBackgroundColor('#fff');
    let total = 0;

    for (var item of wishlist) {
        total += item.price;
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <HeaderExtraSearch header='My Cart' />
            <View style={{ flex: 1, marginHorizontal: 10, marginTop: 10 }}>
                <FlatList
                    data={wishlist}
                    renderItem={({ item }) => (<CartCard item={item} />)}
                    contentContainerStyle={{
                        marginBottom: 10,
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.button}>
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>Subtotal</Text>
                    <Text style={styles.buttonPrice}>${total}.00</Text>
                </View>
                <Next />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        //verticalAlign: "bottom",
        //justifyContent: "flex-end"
    },
    buttonView: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '400',
    },
    buttonPrice: {
        fontSize: 20,
        fontWeight: '800',
        color: "#0C775D"
    },

});

interface WishlistItem {
    price: number;
}