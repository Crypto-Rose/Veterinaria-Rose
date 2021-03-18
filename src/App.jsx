import React from "react";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { Layout } from 'antd';
const {  Content } = Layout;
import { Container } from 'react-bootstrap';
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'


function App() {      

    return(     
        <Container fluid>                   
            <Layout className="site-layout">               
                <Content className="site-layout-background content">  
                    <Router>
                        <Switch>
                            <Route path='/' component={ Home } exact/>
                            <Route path='/about' component={ About }/>                     
                            <Route path='/product' component={ Product } />
                            <Route path='/contact' component={ Contact } />                                           
                        </Switch>
                    </Router>                    
                </Content>
            </Layout>
        </Container>                   
        
    )
}

export default App;
