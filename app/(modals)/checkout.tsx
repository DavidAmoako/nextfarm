import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar
} from 'react-native'
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import HeaderExtra from '@/components/HeaderExtra';
import ButtonExtra from '@/components/ButtonBar';


export default function Checkout() {

    const location = () => { };
    const [value, onChangeText] = useState('');
    StatusBar.setBackgroundColor('#fff');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderExtra location={location} header='Checkout' />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
                <TouchableOpacity activeOpacity={.5} style={styles.container}>
                    <View style={styles.icon}>
                        <Ionicons name="location-outline" size={24} color="#0C775D" />
                    </View>
                    <View style={styles.optionsContainer}>
                        <Text style={styles.title}>Delivery address</Text>
                        <Text style={styles.subtitle}>123 Main Street, Anytown, Ghana</Text>
                    </View>
                    <View style={styles.icon1}>
                        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} style={styles.container}>
                    <View style={styles.icon}>
                        <Octicons name="credit-card" size={24} color="#0C775D" />
                    </View>
                    <View style={styles.optionsContainer}>
                        <Text style={styles.title}>Payment</Text>
                        <Text style={styles.subtitle}>XXXX XXXX XXXX 3456</Text>
                    </View>
                    <View style={styles.icon1}>
                        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.subtitle1}>
                        Additional Notes:
                    </Text>
                    <View style={styles.textInput}>
                        <TextInput
                            editable
                            multiline
                            numberOfLines={5}
                            maxLength={40}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            style={{ paddingHorizontal: 5, paddingVertical: 10 }}
                            placeholder='Write Here'
                            textAlignVertical='top'
                        />
                    </View>
                </View>
                <View style={{ marginTop: 100 }}>
                    <View style={styles.items}>
                        <Text style={styles.subtitle1}>Basket of Tomatoes</Text>
                        <Text style={styles.subtitle1}>2 x $200.00</Text>
                    </View>
                    <View style={styles.items}>
                        <Text style={styles.subtitle1}>Large Onions</Text>
                        <Text style={styles.subtitle1}>2 x $140.99</Text>
                    </View>
                    <View style={styles.items}>
                        <Text style={styles.subtitle1}>Discount</Text>
                        <Text style={styles.subtitle1}>-$100</Text>
                    </View>
                    <View style={[styles.items, { marginBottom: 20 }]}>
                        <Text style={styles.subtitle1}>Shipping</Text>
                        <Text style={[styles.subtitle1, { color: "#0C775D" }]}>FREE Delivery</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>My Order</Text>
                        <Text style={[styles.price, { color: "#0C775D" }]}>$1,599.00</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "500"
    },
    subtitle1: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: "500"
    },
    icon: {
        width: 45,
        height: 45,
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    icon1: {
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
    },
    optionsContainer: {
        flex: 1,
        height: 45,
        marginHorizontal: 15,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    textInput: {
        backgroundColor: "#fff",
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 5,
        height: 130,
        borderColor: 'grey',
        borderWidth: 1,
    },
    price: {
        fontSize: 22,
        fontWeight: '900'
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderColor: 'grey',
        borderTopWidth: 1,
    },
    items: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5
    },
});