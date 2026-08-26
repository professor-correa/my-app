import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";

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

export default SignUp
