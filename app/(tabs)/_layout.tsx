import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
const _layout = () => {
  return (
    <Tabs screenOptions={
      {
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        },
      }
    }>
      <Tabs.Screen name="explore" options={
        {
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" size={size} color={color} />
          },
        }
      }/>
      <Tabs.Screen name="wishlist" options={
        {
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="heart-outline" size={size} color={color} />
          },
        }
      }/>
      <Tabs.Screen name="trips" options={
        {
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="airbnb" size={size} color={color} />
          },
        }
      }/>
      <Tabs.Screen name="inbox" options={
        {
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="message-outline" size={size} color={color} />
          },
        }
      }/>
      <Tabs.Screen name="profile" options={
        {
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person-circle-outline" size={size} color={color} />
          },
        }
      }/>
    </Tabs>
  )
}

export default _layout