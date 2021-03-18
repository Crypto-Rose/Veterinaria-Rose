import React, { useState } from "react";
import { Col, Divider, Row, Space,Input, Comment, Avatar, message } from 'antd';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment'
import Template from "../components/Template"
import Editor from "../components/Editor"
import CommentList from "../components/CommentList"
import Cards from "../components/Cards"
import Dog from '../img/dog.jpg'
import People from '../img/people.png'


const { Search } = Input;

export default function Home() {      
    const [valueM,setValue] = useState()
    const [comments,setComments] = useState([])
    const [submitting,setSubmitting] = useState(false)
    
    const info = () => { message.info('Proceso exitoso'); };

    const handleSubmit = () => {  
        if (!valueM) {
            return;
          }
        
        setSubmitting(true)
    
        setTimeout(() => {
           
            setSubmitting(false)
            setValue('')
            setComments([
                ...comments,
                {
                    author: 'Usuario',
                    avatar: `${People}`,
                    content: <p>{valueM}</p>,
                    datetime: moment().fromNow(),
                  }
                ])     
        }, 1000);
    };
    
    const handleChange = e => {
        setValue(e)    
    };

    return(
        <React.Fragment>
            <Template/>             
            <Space className="text-center mt-5">
                <Row>
                    <Col span={12} className="title-initial">
                        <p>Te damos la bienvenida a tu veterinaria amiga.💖</p> 
                        <Button variant="info" size="lg">
                            <Link to="/about">    
                                Mas información
                            </Link>                            
                        </Button>
                    </Col>
                    <Col span={12}>
                        <img src={ Dog } width="50%"/>
                    </Col>
                </Row>                
            </Space>
            <Divider/>
           <Cards/>
            <Space className="email my-5">    
                <Row>
                    <Col span={8}>
                        <h3>
                            Recibe nuevo contenido directamente en tu bandeja de entrada.
                        </h3>
                    </Col>
                    <Col span={10} offset={6}>
                        <Search
                            placeholder="Introduce tu dirección de correo electrónico"
                            allowClear
                            enterButton="Enviar"
                            size="large"
                            onSearch={info}                           
                        />
                    </Col>
                </Row>          
            </Space>

            <div className="comments-title">
                <p>Deja tu comentario 😊 </p>  
            </div>

            {comments.length > 0 && <CommentList comments={comments} />}           
            <Comment
                avatar={
                    <Avatar
                    src={People}
                    alt="Usuario"
                    />
                }
                content={
                    <Editor
                        onChange={(e)=> {handleChange(e.target.value)}}
                        onSubmit={handleSubmit}
                        submitting={ submitting }
                        value={ valueM }
                    />
                }
            />
        </React.Fragment>
        
    )
}
