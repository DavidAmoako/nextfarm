import { View, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import React from 'react'

export default function ProfileScreen() {
    return (
        <SafeAreaView>
            <View>
                <Text>settings</Text>
            </View>
        </SafeAreaView>
    )
}