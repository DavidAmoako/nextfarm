import { ThemedText } from './ThemedText'
import { useState, useRef } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Animated,
    Pressable
} from 'react-native'
import React from 'react'
import slides from '@/app/slides'
import OnboardingItem from './OnboardingItem'
import Paginator from './Paginator'

export default function Onboarding() {

    const [currentPage, setCurrentPage] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any[] }) => {
        setCurrentPage(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList data={slides} renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <Paginator data={slides} scrollX={scrollX} />
            {/*             <Pressable style={styles.button} onPress={() => { }}>
                <Text style={styles.text}>Get Started</Text>
            </Pressable>
            <View>
                <ThemedText type='default' style={styles.loginText}>
                    Already registered?     <ThemedText type='link' style={styles.loginText1} onPress={() => { }}>Login</ThemedText>
                </ThemedText>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        elevation: 2,
        backgroundColor: "#141517",
        //width: 300,
        height: 60,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    text: {
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold"
    },
    loginText: {
        fontSize: 18,
        color: "#000",
        fontWeight: "semibold",
        marginBottom: 30
    },
    loginText1: {
        fontSize: 18,
        fontWeight: "semibold",
    },
})