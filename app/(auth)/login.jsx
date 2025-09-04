import { StyleSheet, Text} from "react-native";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";


    // theme components
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";

const Login = () => {

    const handleSubmit = () => {
        console.log("Login form submitted");
    }

  return (
         <ThemeView style={styles.container}>
            <ThemeText style={styles.title} title={true}> Login to Your Account </ThemeText>
                
                <ThemedButton onPress={handleSubmit}>
                    <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>Login</Text>
                </ThemedButton>

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
    btn:{
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    pressed:{
        opacity: 0.8,
    }
})