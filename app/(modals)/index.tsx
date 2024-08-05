import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import CategoryScroll from '@/components/CategoryScroll';
import HeaderSearch from '@/components/HeaderSearch';

export default function Search() {

    const location = () => { };
    StatusBar.setBackgroundColor("#fff");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderSearch location={location} />
            <View style={styles.container}>
                <Text style={styles.heading}>Categories</Text>
                <CategoryScroll />
                <View style={styles.historyContainer}>
                    <Text style={styles.heading}>Search History</Text>
                    <TouchableOpacity activeOpacity={.5}>
                        <Text style={{ fontSize: 15, fontWeight: 500 }}>Clear All</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.historyItems}>
                        <Text style={styles.historyText}>Tomato</Text>
                        <TouchableOpacity activeOpacity={.5}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.historyItems}>
                        <Text style={styles.historyText}>Onions</Text>
                        <TouchableOpacity activeOpacity={.5}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.historyItems}>
                        <Text style={styles.historyText}>Pepper</Text>
                        <TouchableOpacity activeOpacity={.5}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.historyItems}>
                        <Text style={styles.historyText}>Carrots</Text>
                        <TouchableOpacity activeOpacity={.5}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.historyItems}>
                        <Text style={styles.historyText}>Green Pepper</Text>
                        <TouchableOpacity activeOpacity={.5}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 10,
        marginTop: 10
    },
    historyText: {
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "left"
    },
    historyContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    historyItems: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10

    },
})