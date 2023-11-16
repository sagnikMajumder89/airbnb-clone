import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Listings = () => {
    const {id} = useLocalSearchParams<{id:string}>()
  return (
    <View>
      <Text>Listings</Text>
    </View>
  )
}

export default Listings