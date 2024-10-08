import {
    Image,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, useGlobalSearchParams, router, Router } from 'expo-router'
import AddandSub from '@/components/AddCart';
import HeaderExtraCart from '@/components/HeaderExtraCart';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const sizes = ['S', 'M', 'L'];
export default function ProductItems() {

    StatusBar.setBackgroundColor("#fff");
    const {
        image,
        title,
        price,
        discount
    } = useLocalSearchParams();


    const [focused, setFocused] = useState(false);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);



    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-end" }}>
            <HeaderExtraCart header='Product Details' />
            <ScrollView style={{ flex: 1, paddingTop: 15, paddingHorizontal: 10, marginBottom: 10 }} showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.productName}>{title}</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 30, justifyContent: "space-between", marginHorizontal: 10 }}>
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                            <Pressable onPress={() => { setFocused(!focused) }} style={{ marginRight: 10 }}>
                                <FontAwesome name={focused ? 'star' : 'star-o'} size={20} color="orange" />
                            </Pressable>
                            <Text style={styles.rating1}>4.5</Text>
                            <Text style={styles.rating2}>(490)</Text>
                        </View>
                        <Text style={styles.priceText}>Price:</Text>
                        <Text style={styles.price}>${price}   <Text style={styles.discount}>${discount}</Text></Text>

                    </View>
                    <View>
                        <Text style={styles.status}><Text style={styles.lv}>lv:{'   '}</Text>Low</Text>
                        <Text style={styles.itemSize}>Item Size</Text>
                        <View style={styles.sizeContainer}>
                            {
                                sizes.map((size) => {
                                    return (
                                        <TouchableOpacity activeOpacity={.5} style={[styles.sizeValueContainer, selectedSize === size && { backgroundColor: "#0c775d" }]} onPress={() => { setSelectedSize(size); }}>
                                            <Text style={[styles.sizeValue, selectedSize === size && { color: "#fff" }]}>{size}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }

                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <Text style={styles.description}>Description: </Text>
                    <Text style={styles.description1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel faucibus mauris. Sed pulvinar, est et faucibus pulvinar, sapien neque varius turpis, at ultricies ligula lectus ut velit. Donec in turpis et dolor aliquet consectetur. Nulla facilisi. Sed vel nunc non urna ultricies consectetur. Sed vel nunc non urna ultricies consectetur.</Text>
                </View>
            </ScrollView>
            <View style={styles.btnContainer}>
                <AddandSub />
                <TouchableOpacity activeOpacity={.5} style={styles.btn} onPress={() => { router.replace('/cart') }}>
                    <Text style={styles.text}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 16,
        alignItems: "center"
    },
    btn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20,
        backgroundColor: "#0C775D",
        height: 50,
        borderRadius: 45,

    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: "#fff",
        textAlign: 'center'
    },
    productName: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: "600",
        textAlign: "left",
        marginLeft: 5
    },
    rating1: {
        fontSize: 16,
        fontWeight: "500",
        textAlign: "left",
        marginRight: 10
    },
    rating2: {
        fontSize: 16,
        fontWeight: "500",
        color: "#bebdbd",
        textAlign: "left"
    },
    priceText: {
        fontSize: 16,
        fontWeight: "500",
        textAlign: "left"
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: "#0C775D",
    },
    discount: {
        fontSize: 14,
        fontWeight: 'medium',
        color: "#000",
        textDecorationLine: 'line-through',
        fontStyle: "italic",
    },
    status: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        color: "#159e42",
        textAlign: "left"
    },
    lv: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
        color: "#000",
        textAlign: "left"
    },
    itemSize: {
        fontSize: 15,
        lineHeight: 24,
        fontWeight: "500",
        textAlign: "left",
        marginTop: 10
    },
    imageContainer: {
        height: 350,
        width: "100%",
        marginBottom: 30,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 25,
        resizeMode: 'cover',
    },
    sizeContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "space-between"
    },
    sizeValue: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000",
    },
    sizeValueContainer: {
        backgroundColor: "#fff",
        width: 42,
        height: 42,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5
    },
    description: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "500",
    },
    description1: {
        lineHeight: 20,
        textAlign: "left"
    }
})