import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import category from '@/Data/category';
import Product from '@/components/Product';
import HeaderExtraSearch from '@/components/HeaderExtraSearch';

export default function ShopCategoryScreen() {

  StatusBar.setBackgroundColor("#fff");

  return (
    <SafeAreaView style={styles.container}>
      <HeaderExtraSearch header='Category' />
      <View style={styles.product}>
        <FlatList
          numColumns={2}
          data={category}
          renderItem={({ item }) => (<Product item={item} />)}
          contentContainerStyle={{
            marginBottom: 10,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50
  },
  product: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 30
  }
})