import React, {FC} from 'react';
import {Container, Row,} from "../styles/styles";
import MainTop from "../components/Main/MainTop";
import MainForm from "../components/Main/MainForm";



const Main: FC = () => {

    return (
        <Container pb='main'>
            <MainTop/>
            <Row/>
            <MainForm/>
        </Container>
    );
};

export default Main;