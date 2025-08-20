import { StyleSheet, Text, View, useColorScheme} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'
import ThemeView from '../components/ThemeView'
import ThemeText from '../components/ThemeText'

const About = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemeView style={[styles.container, {backgroundColor:theme.background}]}>
      <ThemeText style={[styles.title, {title:theme.text} ]}>About Page</ThemeText>
      <Link href="/" style={[styles.link, {title:theme.iconColor}]}>
        <ThemeText>Back to home page</ThemeText>
      </Link>
    </ThemeView>
  )
}

export default About

const styles = StyleSheet.create({
     title:{
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