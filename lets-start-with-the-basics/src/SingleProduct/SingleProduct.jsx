import React from 'react';
import { Button, Card, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './SingleProduct.module.css';
const SingleProduct = (props) => {

    return (
        <Container className={style.Container}>
            {

                props.product.map(p => <Card style={{ width: '18rem', marginTop: '50px' }} key={p._id}>
                    <Nav as={Link} to={`/products/${p._id}`}>
                        <Card.Img variant="top" src={"http://localhost:3001/" + p.picture} />
                    </Nav>
                    <Card.Body>
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">{p.price}p</Button>
                    </Card.Body>
                </Card>)
            }
        </Container>
    )
    
}
debugger

export default SingleProduct;