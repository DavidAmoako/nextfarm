import {
    StyleSheet,
    FlatList,
    View
} from 'react-native'
import React from 'react'
import Category from './Category';
import { useState } from 'react'

const categories = ['Crazy Deals', 'Budget Buys', 'Best Offer', 'Flash Sales'];
export default function CategoryScroll() {

    const [category, setCategory] = useState(null);

    return (
        <View>
            <FlatList
                style={{ marginBottom: 20, marginTop: 10 }}
                data={categories}
                renderItem={({ item }) => (
                    <Category
                        item={item}
                        setCategory={setCategory}
                        selectedCategory={category}
                    />
                )}
                keyExtractor={(item) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({})