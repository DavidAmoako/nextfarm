import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Pressable
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HeaderExtra from '@/components/HeaderExtra';
import { router } from 'expo-router';
import RadioButton from '@/components/RadioButton';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';


export default function DeliveryAddress() {

    StatusBar.setBackgroundColor('#fff');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderExtra header='Delivery Address' />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.icon}>
                        <Feather name="home" size={22} color="#0C775D" />
                    </View>
                    <View style={styles.optionsContainer}>
                        <Text style={styles.title}>Home Address</Text>
                        <Text style={styles.subtitle}>123 Main Street, Anytown, Ghana</Text>
                    </View>
                    <View style={styles.icon1}>
                        <RadioButton />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.icon}>
                        <Ionicons name="location-outline" size={22} color="#0C775D" />
                    </View>
                    <View style={styles.optionsContainer}>
                        <Text style={styles.title}>Office Address</Text>
                        <Text style={styles.subtitle}>123 Main Street, Anytown, Ghana</Text>
                    </View>
                    <View style={styles.icon1}>
                        <RadioButton />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.icon}>
                        <Entypo name="shop" size={22} color="#0C775D" />
                    </View>
                    <View style={styles.optionsContainer}>
                        <Text style={styles.title}>Shop Address</Text>
                        <Text style={styles.subtitle}>123 Main Street, Anytown, Ghana</Text>
                    </View>
                    <View style={styles.icon1}>
                        <RadioButton />
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Pressable style={styles.addButton} onPress={() => { router.push('/address') }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Ionicons name="add-circle-outline" size={26} color="#0C775D" />
                            <Text style={[styles.subtitle, { marginLeft: 10 }]}>Add Address</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={22} color="grey" />
                    </Pressable>
                </View>
            </ScrollView>
            <View style={styles.btnContainer}>
                <TouchableOpacity activeOpacity={.5} style={styles.btn} onPress={() => { router.replace('/checkout') }}>
                    <Text style={styles.text}>Proceed To Payment</Text>
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
    icon: {
        width: 45,
        height: 45,
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    icon1: {
        width: 35,
        height: 35,
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