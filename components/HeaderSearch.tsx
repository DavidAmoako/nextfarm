import {
    Pressable,
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function HeaderSearch({ location }: { location: any }) {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Pressable style={styles.back} onPress={() => { location }}>
                <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
            </Pressable>
            <View style={styles.inputContainer}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    onChangeText={text => setText(text)}
                    placeholder="Search items"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={text} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 5,
    },
    back: {
        width: 45,
        height: 45,
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    inputControl: {
        height: 45,
        paddingHorizontal: 15,
        fontSize: 15,
        fontWeight: '500',
    },
    inputContainer: {
        marginLeft: 10,
        height: 45,
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        flex: 1
    }
})