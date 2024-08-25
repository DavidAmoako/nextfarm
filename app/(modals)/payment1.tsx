import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Image,
    TextInput
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useState } from 'react';
import HeaderExtra from '@/components/HeaderExtra';
import { router } from 'expo-router';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';



export default function PaymentMethod() {

    StatusBar.setBackgroundColor('#fff');
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderExtra header='Payment' />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, flex: 1 }}>
                <View>
                    <Text style={{ fontWeight: 700, fontSize: 16 }}>Credit/Debit Card</Text>
                </View>
                <View style={{ height: 180, marginBottom: 15 }}>
                    <Image source={require('@/assets/images/card.png')} style={{
                        resizeMode: "contain",
                        width: '100%',
                        height: '100%',
                        marginBottom: 20
                    }} />
                </View>
                <Collapsible title="Cash on Delivery">
                    <Text style={styles.subtitle}>
                        Carry on you cash for Payment
                        Thanks
                    </Text>
                </Collapsible>
                <View style={{ margin: 20 }}>

                </View>
                <Collapsible title="Payments/Wallet">
                    <View>
                        <Text style={[styles.subtitle, { marginBottom: 10 }]}>
                            Link Your Wallet
                        </Text>
                        <View style={{ backgroundColor: "#d2d2d2", borderRadius: 10 }}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                keyboardType="number-pad"
                                onChangeText={email => setForm({ ...form, email })}
                                placeholder="+233"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                value={form.email} />
                        </View>
                    </View>
                </Collapsible>
            </ScrollView>
            <View style={styles.btnContainer}>
                <TouchableOpacity activeOpacity={.5} style={styles.btn} onPress={() => { router.dismiss(1) }}>
                    <Text style={styles.text}>Continue</Text>
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
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    inputControl: {
        height: 50,
        width: "80%",
        //marginLeft: 5,
        //backgroundColor: '#fff',
        paddingHorizontal: 16,
        //borderRadius: 12,
        fontSize: 14,
        fontWeight: '400',
        color: '#222',
        // borderBottomColor: '#C9D3DB',
        //borderBottomWidth: 1,
        //borderStyle: 'solid',
    },
});