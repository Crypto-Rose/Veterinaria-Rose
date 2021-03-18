import React from "react";
import { List,Comment } from 'antd';


export default function CommentList({ comments }) {      

    return(       
        <List
            dataSource={comments}
            header={`${comments.length} ${comments.length > 1 ? 'Respuestas' : 'Respuesta'}`}
            itemLayout="horizontal"
            renderItem={props => <Comment {...props} />}
        />                         
    );                  
}
