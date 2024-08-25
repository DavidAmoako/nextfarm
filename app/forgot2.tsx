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
import { router, Router } from 'expo-router';

export default function Example2() {

    const [form1, setForm1] = useState({
        email: '',
        password: '',
    });
    const [form2, setForm2] = useState({
        email: '',
        password: '',
    });
    const [form3, setForm3] = useState({
        email: '',
        password: '',
    });
    const [form4, setForm4] = useState({
        email: '',
        password: '',
    });
    const [form5, setForm5] = useState({
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
                        require('../assets/images/forgot2.jpg')
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
                    <Text style={styles.title}>Enter (OTP)</Text>
                    <Text style={[styles.subtitle, { marginBottom: 30 }]}>
                        An authetication code has been sent to <Text style={{ fontWeight: "600", color: "green" }}>exa*****ple@gmail.com</Text>
                    </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>OTP <Text style={{ color: "red" }}>*</Text></Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.iconContainer}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    clearButtonMode="while-editing"
                                    keyboardType="numeric"
                                    onChangeText={email => setForm1({ ...form1, email })}
                                    placeholderTextColor="#6b7280"
                                    maxLength={1}
                                    style={styles.inputControl}
                                    value={form1.email} />
                            </View>
                            <View style={styles.iconContainer}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    clearButtonMode="while-editing"
                                    keyboardType="numeric"
                                    onChangeText={email => setForm2({ ...form2, email })}
                                    placeholderTextColor="#6b7280"
                                    maxLength={1}
                                    style={styles.inputControl}
                                    value={form2.email} />
                            </View>
                            <View style={styles.iconContainer}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    clearButtonMode="while-editing"
                                    keyboardType="numeric"
                                    onChangeText={email => setForm3({ ...form3, email })}
                                    placeholderTextColor="#6b7280"
                                    maxLength={1}
                                    style={styles.inputControl}
                                    value={form3.email} />
                            </View>
                            <View style={styles.iconContainer}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    clearButtonMode="while-editing"
                                    keyboardType="numeric"
                                    onChangeText={email => setForm4({ ...form4, email })}
                                    placeholderTextColor="#6b7280"
                                    maxLength={1}
                                    style={styles.inputControl}
                                    value={form4.email} />
                            </View>
                            <View style={styles.iconContainer}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    clearButtonMode="while-editing"
                                    keyboardType="numeric"
                                    onChangeText={email => setForm5({ ...form5, email })}
                                    placeholderTextColor="#6b7280"
                                    maxLength={1}
                                    style={styles.inputControl}
                                    value={form5.email} />
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text>
                            <Text style={styles.inputLabel}>Code expires in : 0:30s</Text>
                        </Text>
                    </View>
                    <TouchableOpacity style={{ marginTop: 60 }} onPress={() => { }}>
                        <Text style={{ color: "#929292" }}>You didn't receive code{'  '}<Text style={[styles.formLink, { textDecorationLine: "underline" }]}>Resend</Text></Text>
                    </TouchableOpacity>
                    <View style={styles.formAction}>
                        <TouchableOpacity
                            activeOpacity={.5}
                            style={styles.btn}
                            onPress={() => {
                                router.replace('/forgot3')
                            }}>
                            <Text style={styles.btnText}>Verify</Text>
                        </TouchableOpacity>
                    </View>
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
        color: 'red',
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
        paddingHorizontal: 16,
        fontSize: 30,
        fontWeight: '600',
        color: '#222',
    },
    iconContainer: {
        backgroundColor: "#fff",
        width: 50,
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 10
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