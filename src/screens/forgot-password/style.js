import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: aqua;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

const Title = styled.Text`
    font-size: 32px;
    color: white;
`

const Btn = styled.TouchableOpacity`
    border-radius: 12px;
    padding: 12px;
    background-color: blue;
`

const BtnTitle = styled.Text`
    color: white;
`

export { Btn, BtnTitle, Container, Title }