import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <Link href="/" style={styles.link}>Back to home page</Link>
    </View>
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