import React from "react";
import { Col, Row, Space } from "antd";
import objImg from "../img/obj.jpg"



export default function Objectives() {      

    return(       
        <React.Fragment>
            <Space>
                <Row className="px-5">
                    <Col span={12}  className="obj mt-5">
                        <h5>Objetivos</h5>
                        <ul>
                            <li>Implementar el uso de protocolos médicos en cada situación crítica para facilitar el manejo de los pacientes.</li>
                            <li>Seguimientos continuos durante la recuperación de los pacientes.</li>
                            <li>Prestar servicios clínicos veterinarios de buena calidad y de precios accesibles para los clientes.</li>
                        </ul>                       
                    </Col>
                    <Col span={12} style={{marginTop: '-6%'}}>
                        {
                            objImg 
                            ? <img src={ objImg } width="400"/>
                            : <Skeleton /> 
                        }                    
                        
                    </Col>
                </Row>                
            </Space> 
        </React.Fragment>             
        
    )
}