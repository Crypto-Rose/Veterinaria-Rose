import React from "react";
import {  Menu } from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, ContactsOutlined, AppstoreAddOutlined, CommentOutlined} from '@ant-design/icons';


export default function Main() {      

    return(       
        <React.Fragment>
            <div className="logo">
                <Link to="/">    
                    <h5>Veterinaria Rose</h5>
                </Link>
                
            </div>
            <Menu theme="dark" mode="horizontal" className="menu">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/">    
                        Inicio
                    </Link>
                </Menu.Item>
                <Menu.Item key="1" icon={<ContactsOutlined />}>
                    <Link to="/about">    
                        Acerca de
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
                    <Link to="/product">    
                        Productos
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<CommentOutlined />}>
                    <Link to="/contact">    
                        Contactos
                    </Link>
                </Menu.Item>
            </Menu>
        </React.Fragment>          
        
    )
}
