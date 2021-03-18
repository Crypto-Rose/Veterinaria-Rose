import React from "react";
import { Form,Input, Button as ButtonAnt } from 'antd';
const { TextArea } = Input;

export default function Editor({ onChange, onSubmit, submitting, value }) {      

    return(       
        <React.Fragment>
            <Form.Item>
                <TextArea allowClear rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <ButtonAnt htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                    Agregar Comentario
                </ButtonAnt>
            </Form.Item>
        </React.Fragment>                         
    );                  
}
