import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import { Text } from 'react-native';

import { Colors } from '@/constants/Colors';
//import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { cartContext, CartProvider } from '@/context/CardContext';
import { View } from 'react-native';

export default function TabLayout() {
  //const colorScheme = useColorScheme();

  return (
    <CartProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#0C775D'/* Colors[colorScheme ?? 'light'].tint */,
          tabBarStyle: { paddingTop: 5, paddingBottom: 5, flexGrow: .02, },
          headerShown: false,
          tabBarShowLabel: false,
          //tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
          tabBarHideOnKeyboard: true
        }}>

        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={26} color={focused ? '#0C775D' : '#908f89'} />
            ),
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            title: 'Saved',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'heart' : 'heart-outline'} size={26} color={focused ? '#0C775D' : '#908f89'} />
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            title: 'Products',
            tabBarIcon: ({ color, focused }) => (
              <Entypo name={focused ? 'shop' : 'shop'} size={26} color={focused ? '#0C775D' : '#908f89'} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Basket',
            tabBarIcon: ({ color, focused }) => {
              const { carts } = useContext(cartContext)
              return (
                <View>
                  <Ionicons name={focused ? 'cart' : 'cart-outline'} size={26} color={focused ? '#0C775D' : '#908f89'} />
                  <View style={{ position: 'absolute', top: -10, right: -10, backgroundColor: '#FF0000', borderRadius: 10, width: 18, height: 18, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>{carts?.length}</Text>
                  </View>
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name={focused ? 'user-alt' : 'user'} size={focused ? 22 : 24} color={focused ? '#0C775D' : '#908f89'} />
            ),
          }}
        />
      </Tabs>
    </CartProvider>
  );
}
