import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
//import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  //const colorScheme = useColorScheme();

  return (
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
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={26} color={focused ? '#0C775D' : '#908f89'} />
          ),
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
  );
}
