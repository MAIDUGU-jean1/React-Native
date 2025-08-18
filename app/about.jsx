import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/" style={styles.link}>Back to home page </Link>
    </View>
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