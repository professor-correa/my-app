import { Text, View, StyleSheet } from "react-native";

const SignUp = () => {
    return (
        <View style={styles.container}>   
            <Text>Sign Up</Text>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})