import React from "react";
import { Col, Row, Space } from "antd";
import misionImg from "../img/mision.jpg"


export default function Mision() {      

    return(       
        <React.Fragment>
           
            <Space>
                <Row className="px-5">
                    <Col span={12}  className="mision mt-5">
                        <h5>Misión</h5>
                        <p>Proporcionar servicios integrales de la más alta calidad desde los servicios online para cuidar, consentir y proporcionar los mejores momentos a nuestros mejores amigos, nuestras mascotas.</p>                        
                    </Col>
                    <Col span={12} style={{marginTop: '-6%'}}>
                        <img src={ misionImg } width="400"/>
                    </Col>
                </Row>                
            </Space>                  
            
        </React.Fragment>             
        
    )
}