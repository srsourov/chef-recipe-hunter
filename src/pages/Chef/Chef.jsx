import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import { Row } from 'react-bootstrap';

const Chef = () => {
    const chef = useLoaderData();
    const {picture, name, years_of_experience, num_of_recipes, likes, bio, recipes} = chef;
    return (
        <div className='my-5'>
            <div className='d-flex justify-center w-75 mx-auto my-5'>
                <div>
                    <img className='shadow bg-white rounded' style={{width: "250px", borderRadius: "5px"}} src={picture} alt="" />
                </div>
                <div className='p-5 my-auto'>
                    <h2>{name}</h2>
                    <p className='me-5'>{bio}</p>
                    <p>Experience: <b>{years_of_experience} Years</b></p>
                    <p>Number of Recipes: <b>{num_of_recipes}</b></p>
                    <p>Likes: <b>{likes}</b></p>
                </div>
            </div>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.recipeId}
                            recipe={recipe}
                        ></Recipe>)
                    }
                </Row>
                
            </div>
        </div>
    );
};

export default Chef;