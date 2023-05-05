import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {createUser, updateProfileInfo} = useContext(AuthContext)
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    
    const handleRegister = (event) => {
            setError("")
            setSuccess("")
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const photo = form.photo.value;

           createUser(email, password)
           .then(result => {
                const createdUser = result.user;
                setSuccess("Successfully Signed in")
                updateProfileInfo(name, photo)
                .then(() => {
                    console.log(createdUser)
                })
                .catch((error) => {
                        setError(error.message)
            });
           })
           .catch(error => {
                setError(error.message)
           })

           
            
    }

    

    return (
        <Container className='w-50 mx-auto shadow rounded m-5 p-5'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Name" required />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Paste Photo URL" required />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required /> 
            </Form.Group>
            <Button  variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-success">
                     {success}
                </Form.Text>
                <Form.Text className="text-danger">
                     {error}
                </Form.Text>
            <Form.Text className="text-success">
                <p>Already have an account? <Link to="/login">Login Now</Link> </p>
            </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;