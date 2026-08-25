import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, StyleSheet, Text, View } from "react-native"

const SignIn = () => {

    const navigation = useNavigation()
    return (
        <View>
            <Text>Sign In</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}>
                <Text>Forgot Password</Text>  
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}>
                <Text>Sign Up</Text>    
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}>
                <Text>Home</Text>          
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SignIn