import React from "react";
import { Col, Row, Space } from "antd";
import visionImg from "../img/vision.jpg"


export default function Vision() {      

    return(       
        <React.Fragment>
           
            <Space>
                <Row className="px-5">
                    <Col span={12}  className="vision mt-5">
                        <h5>Visión</h5>
                        <p>Contar con servicio presenciales u online 24 horas 7 días a la semana que abarquen toda el área metro abarquen toda el área metropolitana, satisfaciendo la necesidad de servicios veterinarios para personas que buscan trato profesional y especializado.</p>                        
                    </Col>
                    <Col span={12} style={{marginTop: '-6%'}}>
                    {
                        visionImg 
                        ? <img src={ visionImg } width="400"/>
                        : <Skeleton /> 
                    }   
                        
                    </Col>
                </Row>                
            </Space>                  
            
        </React.Fragment>     
    )
}
