import { Col, Input, Row, Space, Button,Form, message } from "antd";
import React from "react";
import Template from "../components/Template"



export default function Contact() {      

    const mess = () => {
        message.success('Mensaje enviado 🔥');
      };

    return(       
        <React.Fragment>
            <Template />
            <Space style={{width:"100%"}}>
                <Row className="mt-5 mx-3 contact-form">                    
                    <Col span={10}>  
                    <h3>Envianos tus comentarios</h3>
                    <Form name="nest-messages" className="mt-5" onFinish={mess}>
                            <Form.Item name={['user', 'name']} label="Nombre">
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'email']} label="Correo">
                                <Input />
                            </Form.Item>                                                        
                            <Form.Item name={['user', 'comment']} label="Comentarios">
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item className="btn-cnt">
                                <Button size="large" type="primary" htmlType="submit">
                                    Enviar
                                </Button>
                            </Form.Item>
                        </Form>                           
                    </Col>
                    <Col span={10} offset={4} className="contact">  
                        <h2>Contactanos</h2>  
                        <div className="mt-5">
                            <p>Calle Ejemplo, 1</p>
                            <p>Bogotá, 10100</p>
                            <p>Colombia</p>
                            <p>correoelectronico@hotmail.com</p>
                            <p>+34 399 555 234</p>
                        </div>    

                    </Col>
                </Row>                
            </Space>     
        </React.Fragment>             
        
    )
}
