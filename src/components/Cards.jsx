import React from "react";
import { CardDeck,Card } from 'react-bootstrap';
import card_one from '../img/card_one.png'
import card_two from '../img/card_two.png'
import card_three from '../img/card_three.png'

export default function Cards() {      

    return(       
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={card_one} />
                <Card.Body>
                <Card.Title>Animales</Card.Title>
                <Card.Text>
                    Somos un equipo que busca lo mejor para nuestros clientes, así que si quieres saber mas sobre nosotros, te contamos nuestra visión, misión y objetivos.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={ card_two } />
                <Card.Body>
                <Card.Title>Productos</Card.Title>
                <Card.Text>
                    Contamos con una galería de nuestros productos para brindarte la mejor atención, en ella veras su descripción y su producto en la comodidad de tu casa o en cualquier lugar donde te encuentres.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={ card_three } />
                <Card.Body>
                <Card.Title>Nosotros</Card.Title>
                <Card.Text>
                    Somos un equipo que busca lo mejor para nuestros clientes, así que si quieres saber mas sobre nosotros, te contamos nuestra visión, misión y objetivos.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>                  
    );                  
}


