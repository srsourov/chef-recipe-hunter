import React, { useState } from 'react';
import { Button, Card, Col, Row, Toast } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaHeart } from 'react-icons/fa';

const Recipe = ({recipe}) => {
    const {recipeId, recipeImg, recipe_name, ingredients, cooking_method, rating} = recipe;
    const [show, setShow] = useState(false);

    return (
        <Col>
            <Card>
                <Card.Img style={{height: "400px", width: "400px"}} variant="top" src={recipeImg} />
                <Card.Body>
                <Card.Title>{recipe_name}</Card.Title>
                <Card.Text>
                    <p className='mb-2'><b>Ingredients: </b></p>{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </Card.Text>
                <Card.Text>

                    <b>Cooking Method:</b> {cooking_method}
                </Card.Text>
                <Card.Text className='d-flex '>
                    <Rating style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly />
                    <span className='ms-2'>{rating}</span>
                </Card.Text>
                <div>
                <Row>
                    <Col md={12} className="mb-2">
                       { !show ? <Button variant='dark' onClick={() => setShow(true)} className="mb-2">
                       <FaHeart className='text-white me-2'></FaHeart> Favourite
                        </Button> : ""}
                        <Toast onClose={() => setShow(false)} show={show} delay={3000}>
                        <Toast.Body>Woohoo, the recipe added in your favourite</Toast.Body>
                        </Toast>
                    </Col>
                    </Row>
                </div>
                </Card.Body>
            </Card>
      </Col>
    );
};

export default Recipe;