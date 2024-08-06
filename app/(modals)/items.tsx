import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import HeaderSearchExtra from '@/components/HeaderSearchExtra'


export default function ProductItems() {
    return (
        <SafeAreaView>
            <HeaderSearchExtra />
            <View style={{ paddingHorizontal: 10 }}>
                <Text>ProductI</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})