import {
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HeaderExtra({ location, header }: { location: any, header: string }) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.back} onPress={() => { location }}>
                <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
            </Pressable>
            <View style={styles.header}>
                <Text style={styles.headerText}>{header}</Text>
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
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 45,
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#141517",
    }
})