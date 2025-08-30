import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

    // theme components
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";

const Register = () => {
  return (
         <ThemeView style={styles.container}>

            <ThemeText style={styles.title} title={true}> Register for an Account </ThemeText>
                
                <Spacer height={100}/>

            <Link href="/login" >
                <ThemeText style={{ textAlign: 'center' }}>Already have an account? Sign In</ThemeText>
            </Link>
            
        </ThemeView>
  );
}

export default Register;

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