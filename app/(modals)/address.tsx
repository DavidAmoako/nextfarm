import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
} from 'react-native'
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import HeaderExtra from '@/components/HeaderExtra';
import { router } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function AddDeliveryAddress() {

    const address = ['Shop', 'Home', 'Office'];
    const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

    StatusBar.setBackgroundColor('#fff');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderExtra header='Delivery Address' />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, flex: 1 }}>
                <KeyboardAwareScrollView>
                    <View>
                        <Text style={styles.title}>
                            Contact Details
                        </Text>
                        <Text style={styles.subtitle}>
                            Full Name
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                            />
                        </View>
                        <Text style={styles.subtitle}>
                            Mobile No.
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Address
                        </Text>
                        <Text style={styles.subtitle}>
                            Region
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                            />
                        </View>
                        <Text style={styles.subtitle}>
                            City/District
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                            />
                        </View>
                        <Text style={styles.subtitle}>
                            Digital Address
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                            />
                        </View>
                        <Text style={styles.subtitle}>
                            Landmark
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.sizeContainer}>
                            {
                                address.map((address) => {
                                    return (
                                        <TouchableOpacity activeOpacity={.5} style={[styles.sizeValueContainer, selectedAddress === address && { backgroundColor: "#0c775d" }]} onPress={() => { setSelectedAddress(address); }}>
                                            <Text style={[styles.sizeValue, selectedAddress === address && { color: "#fff" }]}>{address}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }

                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ScrollView>
            <View style={styles.btnContainer}>
                <TouchableOpacity activeOpacity={.5} style={styles.btn} onPress={() => { router.replace('/delivery') }}>
                    <Text style={styles.text}>Save Address</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
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
    sizeContainer: {
        flexDirection: "row",
        marginTop: 8,
        marginBottom: 8,
    },
    sizeValue: {
        fontSize: 15,
        fontWeight: "600",
        color: "#000",
    },
    sizeValueContainer: {
        backgroundColor: "#fff",
        width: 65,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5
    },
    inputContainer: {
        backgroundColor: '#fff',
        height: 42,
        borderRadius: 10,
        borderColor: "grey",
        borderWidth: .5,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 15,
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 3,
    },
    subtitle: {
        fontSize: 13,
        marginBottom: 5,
    },
});