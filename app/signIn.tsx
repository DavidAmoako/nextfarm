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

export default function Example() {

    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

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
            <KeyboardAwareScrollView>
                <View style={styles.header}>
                    <Image
                        alt="App Logo"
                        resizeMode="contain"
                        style={styles.headerImg}
                        source={
                            require('../assets/images/adaptive-icon.png')
                        } />

                    <Text style={styles.title}>
                        Sign in to <Text style={{ color: '#ff5e03' }}>The</Text><Text style={{ color: '#159e42' }}>NextFarm</Text>
                    </Text>

                    <Text style={styles.subtitle}>
                        Get access to fresh products and more
                    </Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Email address</Text>
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

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.iconContainer}>
                                <MaterialIcons name="lock-person" size={24} color="green" />
                            </View>
                            <TextInput
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                onChangeText={password => setForm({ ...form, password })}
                                placeholder={isSecureTextEntry ? "********" : "password"}
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                secureTextEntry={isSecureTextEntry}
                                value={form.password} />
                            <TouchableOpacity onPress={() => { setIsSecureTextEntry(!isSecureTextEntry) }}>
                                <Feather name={isSecureTextEntry ? "eye-off" : "eye"} size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.divider}></View>

                    <View style={styles.formAction}>
                        <TouchableOpacity
                            activeOpacity={.5}
                            style={styles.btn}
                            onPress={() => {
                                router.replace('/(tabs)')
                            }}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.formLink}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>

            <TouchableOpacity
                onPress={() => {
                    // handle link
                }}
                style={{ marginTop: 'auto' }}>
                <Text style={styles.formFooter}>
                    Are you new to this app?{' '}
                    <Text style={{ textDecorationLine: 'underline', color: '#075eec' }}>Register</Text>
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1D2A32',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#929292',
    },
    /** Header */
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 36,
        marginBottom: 50,
    },
    headerImg: {
        width: 170,
        height: 170,
        alignSelf: 'center',
    },
    /** Form */
    form: {
        marginBottom: 24,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginTop: 8,
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