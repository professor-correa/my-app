import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const SignUp = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("SignIn")}>
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default SignUp
