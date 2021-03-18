import React, { useState } from "react";
import { Space,Steps, Button, message, Row, Col, Divider } from 'antd';
import Vision from "./Vision"
import Mision from "./Mision"
import Objectives from "./Objectives"
import logo from '../img/logo.jpg'

const { Step } = Steps;

const steps = [
    {
      title: 'Misión',
      content: <Mision/>,
    },
    {
      title: 'Vision',
      content: <Vision/>,
    },
    {
      title: 'Objetivos',
      content: <Objectives/>,
    },
  ];


export default function Company() {   
    
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent(current + 1);
    };
    
      const prev = () => {
        setCurrent(current - 1);
    };


    return(       
        <React.Fragment>
            <Space>
                <Row className="mt-5 px-5">                    
                    <Col span={9} className="mt-1">
                        <img src={ logo } width="60%"/>
                    </Col>
                    <Col span={14} offset={1}  className="title-company">
                        <Divider type="vertical" className="divider"/>
                        <div className="ml-3 mt-5">
                            <h2>Somos una compañía comprometida con su labor de brindarte el mejor acompañamiento</h2>
                            <p>Mereces lo mejor y para eso estamos nosotros, porque tu mascota es lo esencial y lo entendemos a la perfección, te ofrecemos servicios y productos de calidad</p>                                             
                        </div>
                        
                    </Col>
                </Row>                
            </Space>     
            <Steps current={current} className="mt-5">
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">
                {steps[current].content}
            </div>
            <div className="steps-action my-5">
                {current < steps.length - 1 && (
                    <Button size="large" onClick={() => next()}>
                        Siguiente 
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button size="large"onClick={() => message.success('Proceso completo!')}>
                        Hecho
                    </Button>
                )}
                {current > 0 && (
                    <Button size="large" style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Anterior
                    </Button>
                )}
            </div>
        </React.Fragment>                   
    )
}
