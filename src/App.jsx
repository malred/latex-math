import {NavBar} from "./components/NavBar";
import './App.css'
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {Footer} from "antd/es/modal/shared";
import {Container} from "./components/Container";
import {MathJaxFormula, MathJaxProvider} from "mathjax3-react";


const layoutStyle = {
    borderRadius: 8,
    width: '90vw',
    maxWidth: '100vw',
};

function App() {

    return (
        <MathJaxProvider>
            <Layout>
                <NavBar/>
                <Content>
                    <Container/>
                </Content>
            </Layout>
        </MathJaxProvider>
    )
}

export default App
