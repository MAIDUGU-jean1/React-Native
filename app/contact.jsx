import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'
import ThemeView from '../components/ThemeView'
import ThemeText from '../components/ThemeText'

const Contact = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemeView style={[styles.container, {backgroundColor:theme.background}]}>
      <ThemeText style={[styles.title,{text:theme.text}]}>Contact Page</ThemeText>
      <Link href="/" style={styles.link}>
        <ThemeText>Back to home page</ThemeText>
      </Link>
    </ThemeView>
  )
}

export default Contact

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    link: {
        marginTop: 20,
        fontSize: 16,
        color: '#007BFF',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#007BFF',
    },
})