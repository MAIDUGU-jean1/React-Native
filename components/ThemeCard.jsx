import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemeCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light 
  return (
    <View
        style={[styles.card, {backgroundColor: theme.uiBackground}, style]}
        {...props}
    />
  )
}

export default ThemeCard

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    padding: 20,
  },

})
