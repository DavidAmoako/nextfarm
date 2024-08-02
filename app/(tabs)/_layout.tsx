import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0C775D'/* Colors[colorScheme ?? 'light'].tint */,
        tabBarStyle: { borderRadius: 20, paddingBottom: 10, bottom: 6, flexGrow: .03, elevation: 2 },
        headerShown: false,
        tabBarShowLabel: false,
        //tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },

      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={26} color={focused ? '#0C775D' : '#000000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name={focused ? 'heart-fill' : 'heart'} size={26} color={focused ? '#0C775D' : '#000000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, focused }) => (
            <Entypo name={focused ? 'shop' : 'shop'} size={26} color={focused ? '#0C775D' : '#000000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Basket',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={26} color={focused ? '#0C775D' : '#000000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} size={26} color={focused ? '#0C775D' : '#000000'} />
          ),
        }}
      />
    </Tabs>
  );
}
