import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
    Pressable
} from 'react-native'
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import HeaderExtra from '@/components/HeaderExtra';
import { router } from 'expo-router';


export default function DeliveryAddress() {

    const [modalVisible, setModalVisible] = useState(false);

    const [value, onChangeText] = useState('');
    StatusBar.setBackgroundColor('#fff');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderExtra header='Checkout' />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, flex: 1 }}>
                <TouchableOpacity activeOpacity={.5} style={styles.container}>
                    <View style={styles.icon}>
                        <Ionicons name="location-outline" size={22} color="#0C775D" />
                    </View>
                    <View style={styles.optionsContainer}>
                        <Text style={styles.title}>Delivery address</Text>
                        <Text style={styles.subtitle}>123 Main Street, Anytown, Ghana</Text>
                    </View>
                    <View style={styles.icon1}>
                        <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} style={styles.container}>
                    <View style={styles.icon}>
                        <Octicons name="credit-card" size={22} color="#0C775D" />
                    </View>
                    <View style={styles.optionsContainer}>
                        <Text style={styles.title}>Payment</Text>
                        <Text style={styles.subtitle}>XXXX XXXX XXXX 3456</Text>
                    </View>
                    <View style={styles.icon1}>
                        <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
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
            <View style={styles.btnContainer}>
                <TouchableOpacity activeOpacity={.5} style={styles.btn} onPress={() => { setModalVisible(true) }}>
                    <Text style={styles.text}>Submit Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    subtitle: {
        fontSize: 14,
    },
    subtitle1: {
        marginTop: 20,
        fontSize: 15,
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
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    optionsContainer: {
        flex: 1,
        height: 40,
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
        fontSize: 18,
        fontWeight: '500'
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
    btnContainer: {
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 13,
        paddingBottom: 24,
    },
    btn: {
        borderRadius: 40,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        backgroundColor: "#0C775D",
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: "#fff",
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: '#0C775D',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    modalSubText: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
    },
    inner: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,
        height: 85,
        backgroundColor: '#159E42',
        borderRadius: 45,
    },
    outer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#0C775D5D',
        borderRadius: 50,
        marginBottom: 15,
    },
});