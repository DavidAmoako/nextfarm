import {
    StyleSheet,
    Animated,
    useWindowDimensions,
    View
} from 'react-native'
import React from 'react'

export default function Paginator({ data, scrollX }: { data: any; scrollX: any }) {

    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            {data.map((_: any, i: number) => {

                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp'
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                });

                return <Animated.View key={i.toString()} style={[
                    styles.dot,
                    {
                        width: dotWidth,
                        opacity,
                    },
                ]}
                />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 64,
    },
    dot: {
        height: 6,
        borderRadius: 5,
        backgroundColor: '#0C775D',
        marginHorizontal: 8
    }
})