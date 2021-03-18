import React, { useState } from "react";
import { Layout } from 'antd';
import Main from '../components/Main'

const { Header, Sider,Footer } = Layout;
   

export default function Template() {      

    return(
        <Layout className="layout">
            <Header  className="header-menu">        
                <Main/>
            </Header>               
        </Layout>
    )
}
