import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Gradient } from '@/components/Gradient'
import { StatusBar } from 'react-native'
import HeaderHome from '@/components/HeaderHome'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import ProductCard from '@/components/ProductCard'
import product from '@/Data/product'
import { useState } from 'react'
import ProductCard1 from '@/components/ProductCard1'
import CategoryScroll from '@/components/CategoryScroll'
import data from '@/Data/data.json'
import { router, Router } from 'expo-router'

const height = StatusBar.currentHeight !== undefined ? StatusBar.currentHeight + 5 : 0;

const categories = ['Crazy Deals', 'Budget Buys', 'Best Offer', 'Flash Sales'];


export default function ShopHomeScreen() {

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState(data.products);

  const handleLiked = (item: { id: number }) => {
    const newProducts = products.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isLiked: true,
        }
      }
      return prod;
    });
    setProducts(newProducts);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/**Components */}
      <Gradient />
      <HeaderHome />

      {/**Product Horizontal */}
      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
            {/**Input Container */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder='Search Products'
              />
              <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name="search" size={24} color="#0C775D" />
              </TouchableOpacity>
            </View>

            {/**Product on Display */}
            <View style={styles.productContainer}>
              <View>
                <Text style={styles.headText}>Fruits and Veggies</Text>
                <Text style={styles.nameText}>{`Tomato Basket
(L)`}</Text>
                <Text style={styles.priceText}>$340   <Text style={styles.priceDiscountText}>$640</Text></Text>
                <TouchableOpacity activeOpacity={0.5} style={styles.addButton}>
                  <Text style={styles.addText}>+  ADD</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imageView}>
                <Image source={require('@/assets/images/payment.jpg')} style={styles.product} />
              </View>
            </View>

            {/**Product Horizontal */}
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>Find Category</Text>
              <FlatList
                data={product}
                renderItem={({ item }) => (
                  <ProductCard item={item} />
                )}
                keyExtractor={(item) => item.name}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />

              {/**Products Category */}
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.categoryText}>Most Popular Products</Text>
                <TouchableOpacity><Feather name="arrow-right-circle" size={24} color="black" /></TouchableOpacity>
              </View>
              <CategoryScroll />
            </View>
          </>
        }
        data={products}
        renderItem={({ item, index }) => (<ProductCard1 item={item} handleLiked={handleLiked} />)}
        contentContainerStyle={{
          marginBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: height,
    marginBottom: 10
  },
  inputContainer: {
    backgroundColor: '#fff',
    height: 48,
    borderRadius: 15,
    margin: 20,
    flexDirection: "row",
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginLeft: 20,
  },
  iconContainer: {
    marginHorizontal: 20,
  },
  headText: {
    fontSize: 15,
    fontWeight: 'normal',
    marginBottom: 10,
    color: "#0C775D",
  },
  nameText: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#0C775D",
  },
  priceDiscountText: {
    fontSize: 18,
    fontWeight: 'medium',
    color: "#000",
    textDecorationLine: 'line-through',
    fontStyle: "italic",
  },
  addButton: {
    backgroundColor: "#0C775D",
    padding: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: "center",
    marginRight: 40
  },
  addText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#fff",
    margin: 5,
  },
  product: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  imageView: {
    borderRadius: 20,
    flex: 1,
    margin: 5,
    marginLeft: 20,
  },
  productContainer: {
    marginBottom: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryContainer: {
    marginHorizontal: 20,
  }
})