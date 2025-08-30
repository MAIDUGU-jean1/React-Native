import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

    // theme components
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";

const Login = () => {
  return (
         <ThemeView style={styles.container}>
            <ThemeText style={styles.title} title={true}> Login to Your Account </ThemeText>
                <Spacer height={100}/>
            <Link href="/register" >
                <ThemeText style={{ textAlign: 'center' }}>Don't have an account? Sign Up</ThemeText>
            </Link>
        </ThemeView>
  );
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        padding: 10,
        textAlign: 'center',
    },
})