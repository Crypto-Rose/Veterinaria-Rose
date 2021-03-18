import React from "react";
import { Button, Card, CardColumns } from "react-bootstrap";
import Template from "../components/Template"
import foodCat from "../img/food-cat.jpg"
import foodDog from "../img/food-dog.jpg"
import petShop from "../img/pet-shop.jpg"
import playCat from "../img/play-cat.jpg"
import playDog from "../img/play-dog.jpg"
import plays from "../img/play.jpg"



export default function Product() {      

    return(       
        <React.Fragment>
            <Template />
            <CardColumns className="mt-5">
                <Card>
                    <Card.Img variant="top" src={ foodCat } />
                    <Card.Body>
                        <Card.Title>Comida para gatos</Card.Title>
                        <Card.Text>
                            <p>
                                La comida para gatos está formulada específicamente para cubrir las necesidades nutricionales de los gatos. Aunque los gatos son carnívoros obligados, la mayoría de la comida de gatos comercial contiene tanto parte animal como vegetal.
                            </p>
                            <Button variant="success">Compralo ahora</Button>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="p-3">
                    <Card.Img variant="top" src={ foodDog } />
                    <Card.Body>
                        <Card.Title>Comida para perros</Card.Title>
                        <Card.Text>
                            <p>
                                Fue ideada por Ian Billinghurst, un veterinario que defiende que los perros, como sus ancestros, deben consumir exclusivamente alimentos crudos. Este tipo de comida se basa en carne, pescado, huesos blandos y vísceras crudos mezclados con pequeñas cantidades de vegetales.
                            </p>
                            <Button variant="success">Compralo ahora</Button>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="text-center">
                    <Card.Img  variant="top" src={ playCat } />
                    <Card.Body>
                        <Card.Title>Juguetes para gatos</Card.Title>
                        <Card.Text>
                            <p>
                                Puedes tener tranquilidad mientras tu gato se pone ocupado desarrollando sus habilidades de caza e imaginando que están peleando con un pájaro o un ratón real.
                            </p>                            
                            <Button variant="success">Compralo ahora</Button>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="text-center">
                    <Card.Img variant="top" src={ playDog } />
                    <Card.Body>
                        <Card.Title>Juguetes para perros</Card.Title>
                        <Card.Text>
                            <p>
                                Mantenga a su perro lejos de la soledad. El conjunto de juguetes puede aliviar la ansiedad de su perro, fortalecer la intimidad con su dueño, y efectivamente detenga la mala conducta.
                            </p>
                            <Button variant="success">Compralo ahora</Button>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="text-right">
                    <Card.Img variant="top" src={ petShop } />
                    <Card.Body>
                        <Card.Title>Medicina especializada</Card.Title>
                        <Card.Text>
                            <p>
                                Tenemos los productos especializados para tu mascota, ya que comprendemos que ellos también se enferman y hay que tener lo necesario para su desarrollo.
                            </p>
                            <Button variant="success">Compralo ahora</Button>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>              
                <Card className="text-right">
                    <Card.Img variant="top" src={ plays } />
                    <Card.Body>
                        <Card.Title>Zona de juego</Card.Title>
                        <Card.Text>
                            <p>
                                Tenemos una completa rutina para todos los huéspedes de la guardería. Podemos personalizar la de su mascota.
                            </p>
                            <Button variant="success">Compralo ahora</Button>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>               
                </CardColumns>
        </React.Fragment>         
            
    )
}
