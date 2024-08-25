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
import RadioButton from '@/components/RadioButton';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function AddDeliveryAddress() {

    const [modalVisible, setModalVisible] = useState(false);

    const [value, onChangeText] = useState('');
    StatusBar.setBackgroundColor('#fff');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderExtra header='Delivery Address' />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, flex: 1 }}>
                <KeyboardAwareScrollView>

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
    addButton: {
        backgroundColor: "#fff",
        flexDirection: "row",
        borderRadius: 10,
        borderColor: "#D9D9D9",
        borderWidth: 1.5,
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 15,
        alignItems: "center",
        justifyContent: "space-between"

    }
});