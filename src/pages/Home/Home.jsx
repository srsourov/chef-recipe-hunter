import React from 'react';
import bannerImg1 from "../../assets/h4-pricing-list-img-1.jpg"
import bannerImg2 from "../../assets/h4-pricing-list-img-2.jpg"
import bannerImg3 from "../../assets/h4-pricing-list-img-3.jpg"
import { Button, Carousel, Row } from 'react-bootstrap';
import bgImg from "../../assets/chef_1.png"
import sideImage from "../../assets/contributor.jpg"
import ChefCard from './ChefCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const chefs = useLoaderData();
    

    return (
        <div>
            <div style={{height: "600px"}} className='d-flex align-items-center'>
            <div  className='w-50'>
                <h1 className='mb-4'>Start eating, feeling and living better today. Build good habits with us and our meal plans.</h1>
                <p className='mb-4'>No matter how you cook, we have many the recipes for you</p>
                <Button variant="dark">View All Recipes</Button>
            </div>
            <div className='w-50'>
            <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100 rounded"
                src={bannerImg1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded"
                src={bannerImg2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded"
                src={bannerImg3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </div>
            </div>
            <div>
                <h2 className='text-center mb-4'>Our Chefs</h2>
                <div className='my-4 '>
                    <Row xs={1} md={3} className="g-4">
                        {
                            chefs.map(chef => <ChefCard 
                            key={chef.id}
                            chef={chef}
                            ></ChefCard>)
                        }
                    </Row>
                </div>
            </div>
            <div className='my-5 d-flex justify-content-between rounded'>
                <div className='my-auto'>
                    <h1 className='mb-4'>Become a Contributor and enjoy program benefits</h1>
                    <p>Contribute to our program and get benefits from us</p>
                    <ul className='mb-4'>
                        <li>Extra Money</li>
                        <li>Access to secret recipes</li>
                        <li>Recipe Course</li>
                    </ul>
                    <Button variant='dark'>Apply Now</Button>
                </div>
                <div className='text-end'>
                    <img className='w-75 rounded' src={sideImage} alt="" />
                </div>
            </div>
            <div style={{backgroundColor: "#F6F8FA", padding: "10px 40px"}} className='mb-5 d-flex justify-content-between w-100 mx-auto rounded'>
                <div className='text-start my-auto'>
                    <h1 style={{fontSize: "45px"}} className='mb-4'>Let's start sharing your <br/>awesome recipes</h1>
                    <p className='mb-4'>Share your recipe with us and get a chance to win a big prize</p>
                    <Button variant='dark'>Join Now</Button>
                </div>
                <div className='text-end'>
                    <img className='w-75' src={bgImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;