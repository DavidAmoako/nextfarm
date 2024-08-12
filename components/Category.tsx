import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import React from 'react'

export default function Category({ item, setCategory, selectedCategory }: { item: any, setCategory: any, selectedCategory: any }) {
    return (
        <TouchableOpacity onPress={() => setCategory(item)}>
            <Text style={[
                styles.categoryText,
                selectedCategory === item && {
                    color: "#fff",
                    backgroundColor: "#0C775D"
                },
            ]}>{item}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
        color: "#000",
        //backgroundColor: "#908f89",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 6,

    },
})