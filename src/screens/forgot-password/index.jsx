import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"


const ForgotPassword = () => {
    
    const navigation = useNavigation()
    
    return ( 
        <View>
            <Text>Forgot Password</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate("SignIn")}>
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}  

const styles = StyleSheet.create({})

export default ForgotPassword