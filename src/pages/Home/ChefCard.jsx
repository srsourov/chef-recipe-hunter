import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { FaCertificate, FaThumbsUp, FaHamburger } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ChefCard = ({chef}) => {
    const {picture, name, years_of_experience, num_of_recipes, likes, id} = chef;
    return (
        <Col>
                <Card className='p-4'>
                    <Card.Img style={{height: "300px", width: "300px", borderRadius: "50%", margin: "20px auto"}} variant="top" src={picture} />
                    <Card.Body style={{backgroundColor: "#efefef", borderRadius: "5px", padding: "20px"}}>
                    <Card.Title className='mb-4'>{name}</Card.Title>
                    <Card.Text className='mb-2'><FaCertificate style={{margin: "-3px 3px 0 0"}}></FaCertificate> {years_of_experience} Years of Experience</Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Card.Text className='font-weight-bold'><FaThumbsUp style={{margin: "-5px 3px 0 0"}}></FaThumbsUp> <b style={{fontSize: "18px" }}>{likes}</b></Card.Text>
                        <Card.Text><FaHamburger style={{margin: "-5px 3px 0 0"}}></FaHamburger> <b style={{fontSize: "18px" }}>{num_of_recipes} Recipes</b></Card.Text>
                    </div>
                    <Link className='text-decoration-none text-white' to={`/chef/${id}`}><Button variant="dark">View Recipes</Button></Link>
                    </Card.Body>
                </Card>
        </Col>
    );
};

export default ChefCard;