import { useNavigation } from "@react-navigation/native"
import { Btn, BtnTitle, Container, Title } from "./style"

const ForgotPassword = () => {
    
    const navigation = useNavigation()
    
    return ( 
        <Container>
            <Title>Forgot Password</Title>
            <Btn 
                onPress={() => navigation.navigate("SignIn")}>
                <BtnTitle>Sign In</BtnTitle>
            </Btn>
            <Btn 
                onPress={() => navigation.navigate("DetailsModal")}>
                <BtnTitle>Details Modal</BtnTitle>
            </Btn>
        </Container>
    )
}  

export default ForgotPassword