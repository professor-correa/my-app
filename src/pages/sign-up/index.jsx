import { Text, View, StyleSheet } from "react-native";

const SignUp = () => {
    return (
        <View style={styles.container}>   
            <Text>Sign Up</Text>
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
