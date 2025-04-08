import { View, Text } from 'react-native'
import React from 'react'

type: FunctionProps = {
    car: string,
    brand: string,
    hp: number
}

export default function Car({car, brand, hp }:FunctionProps) {
  return (
    <View>
      <Text>Car: {car}</Text>
      <Text>Brand: {brand}
        HP: {hp}
      </Text>
    </View>
  )
}