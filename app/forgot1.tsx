import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    StatusBar
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { router, Router } from 'expo-router';

export default function Example1() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
            <StatusBar
                animated={true}
                backgroundColor="#e8ecf4"
                showHideTransition={"fade"}
                barStyle={"dark-content"}
                hidden={false}
            />
            <View style={styles.header}>
                <Image
                    alt="App Logo"
                    resizeMode="center"
                    source={
                        require('../assets/images/forgot1.jpg')
                    } />
            </View>
            <KeyboardAwareScrollView style={{
                flex: 1,
                marginTop: "40%",
                backgroundColor: "#F2F2F2",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingTop: 30
            }}>
                <View style={{ paddingHorizontal: 24, }}>
                    <Text style={styles.title}>Forgot Password</Text>
                    <Text style={[styles.subtitle, { marginBottom: 30 }]}>
                        Enter the Email Associated with your
                        Account and we’ll send and email to <Text style={{ fontWeight: "700", color: "#000" }}>reset</Text>
                    </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Email address<Text style={{ color: "red" }}>*</Text></Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.iconContainer}>
                                <MaterialIcons name="email" size={24} color="green" />
                            </View>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                keyboardType="email-address"
                                onChangeText={email => setForm({ ...form, email })}
                                placeholder="john@example.com"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                value={form.email} />
                        </View>
                    </View>
                    <View style={styles.divider}></View>

                    <View style={styles.formAction}>
                        <TouchableOpacity
                            activeOpacity={.5}
                            style={styles.btn}
                            onPress={() => {
                                router.replace('/forgot2')
                            }}>
                            <Text style={styles.btnText}>Send Mail</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => { router.dismiss(1) }}>
                        <Text style={[styles.formLink, { textDecorationLine: "underline" }]}>Back</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>

            <TouchableOpacity
                onPress={() => {
                    router.replace('/signIn')
                }}
                style={{ marginTop: 'auto' }}>
                <Text style={styles.formFooter}>
                    Go Back To?{' '}
                    <Text style={{ textDecorationLine: 'underline', color: '#075eec' }}>SignIn</Text>
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1E202C',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#929292',
    },
    /** Header */
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "35%",
        position: "absolute"
    },
    /** Form */
    form: {
        marginBottom: 24,
        paddingHorizontal: 24,
        flex: 1,
        //padding: 16,
        //flexDirection: 'row',
        //flexGrow: 1,
        //flexShrink: 1,
        //flexBasis: 0,
    },
    formAction: {
        marginTop: 50,
    },
    formLink: {
        fontSize: 14,
        fontWeight: '600',
        color: '#075eec',
        textAlign: 'center',
    },
    formFooter: {
        fontSize: 12,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
        marginBottom: 10,
    },
    /** Input */
    input: {
        //marginBottom: 16,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
        marginHorizontal: 10
    },
    inputControl: {
        height: 40,
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
    iconContainer: {
        marginLeft: 10,
    },
    /** Button */
    btn: {
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 2,
        backgroundColor: "#141517",
        height: 50,
        marginVertical: 15
    },
    btnText: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },
    divider: {
        borderColor: "#141517",
        borderWidth: .4,
        marginBottom: 16,
        marginHorizontal: 10
    }
});