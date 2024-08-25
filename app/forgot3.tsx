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

export default function Example3() {

    const [isSecureTextEntry, setIsSecureTextEntry] = useState(false);

    const [isSecureText, setIsSecureText] = useState(true);

    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [form1, setForm1] = useState({
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
                        require('../assets/images/forgot3.jpg')
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
                    <Text style={styles.title}>Enter New Password</Text>
                    <Text style={[styles.subtitle, { marginBottom: 30 }]}>
                        Your New Password Must Be Different From
                        Previously Used Password.
                    </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>New Password<Text style={{ color: "red" }}>*</Text></Text>
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

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Confirm Password<Text style={{ color: "red" }}>*</Text></Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.iconContainer}>
                                <MaterialIcons name="lock-person" size={24} color="green" />
                            </View>
                            <TextInput
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                onChangeText={password => setForm1({ ...form1, password })}
                                placeholder={isSecureText ? "********" : "password"}
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                secureTextEntry={isSecureTextEntry}
                                value={form1.password} />
                            <TouchableOpacity onPress={() => { setIsSecureText(!isSecureText) }}>
                                <Feather name={isSecureText ? "eye-off" : "eye"} size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.divider}></View>

                    <View style={styles.formAction}>
                        <TouchableOpacity
                            activeOpacity={.5}
                            style={styles.btn}
                            onPress={() => {
                                router.replace('/signIn')
                            }}>
                            <Text style={styles.btnText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>

            <TouchableOpacity
                onPress={() => {
                    // handle link
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
        color: '#1D2A32',
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
        marginTop: 30,
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