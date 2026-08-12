import { Text, View, StyleSheet } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>

            
            <Text>Sou Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})