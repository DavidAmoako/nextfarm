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

export default function Success() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Vibration.vibrate(1000);
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.outer}>
                            <View style={styles.inner}>
                                <Ionicons name="checkmark-sharp" size={40} color="#fff" />
                            </View>
                        </View>
                        <Text style={styles.modalText}>Congratulations!</Text>
                        <Text style={styles.modalSubText}>
                            Your Order Successfully Delivered!
                        </Text>

                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Done!</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
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
    modalView: {
        //margin: 20,
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    textStyle: {
        color: 'navy',
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
