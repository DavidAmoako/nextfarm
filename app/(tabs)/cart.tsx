import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Next from '@/components/Next';


export default function ShopCartScreen() {

    StatusBar.setBackgroundColor('#fff');
    const location = () => { };

    return (
        <SafeAreaView style={{ flex: 1, }}>

            <Text>Cart</Text>
            <View style={styles.button}>
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>Subtotal</Text>
                    <Text style={styles.buttonPrice}>$340.99</Text>
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