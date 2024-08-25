import React, { useState } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    Vibration
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function Success() {

    return (
        <View style={styles.centeredView}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.outer}>
                    <View style={styles.inner}>
                        <Ionicons name="checkmark-sharp" size={40} color="#fff" />
                    </View>
                </View>
                <Text style={styles.modalText}>Congratulations!</Text>
                <Text style={styles.modalSubText}>
                    Your Order Successfully Delivered!
                </Text>

                <Pressable onPress={() => { router.dismiss(1); Vibration.vibrate(1000) }}>
                    <Text style={styles.textStyle}>Done!</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    textStyle: {
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
    },
    modalSubText: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
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
