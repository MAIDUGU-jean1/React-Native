import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import React from 'react'
import Logo from '../assets/icon.png'
import {Link} from 'expo-router'
import { Colors } from '../constants/Colors'
// Theme provider  
import ThemeView from '../components/ThemeView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemeText from '../components/ThemeText'


const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemeView style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedLogo style={styles.logo} />
      <Spacer height={20} />

      <ThemeText style={styles.title} title={true}>
        The Number 1
      </ThemeText>

      <Spacer height={10} />
      <ThemeText style={styles.subtitle}>Reading List App</ThemeText>
      <Spacer height={10} />
      <Link href="/about" style={styles.link}>
        <ThemeText> Go to About Page </ThemeText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ThemeText> Go to Contact Page </ThemeText>
      </Link>
    </ThemeView>
  );
}

export default Home

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
    logo: {
      width: 100,
      height: 100,
    }

})