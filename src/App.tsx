import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import {MainContainer} from "./styles/styles";
import GlobalStyles from './styles/global'
import FormComponent from "./pages/FormComponent";


export enum Path {
    Main = "/",
    Form = "/create",
}

const App = () => {
    return (
        <MainContainer>
            <Routes>
                <Route path={Path.Main} element={<Main/>}/>
                <Route path={Path.Form} element={<FormComponent/>}/>
            </Routes>
            <GlobalStyles />
        </MainContainer>
    );
};

export default App;
