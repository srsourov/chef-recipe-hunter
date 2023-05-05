import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='my-5'>
        <p>1. Tell us the differences between uncontrolled and controlled components.</p>
        <p><b>Ans.</b> Controlled components means that their state and behavior controlled by their parent component. like they only can work if their paren component passes any props to them. Uncontrolled components are those who manage their own state internally </p>

        <p>2. How to validate React props using PropTypes</p>
        <p><b>Ans.</b>First we install PropTypes. then we create FooComponent which takes several props. Then we validate them by setting the propTypes property of the FooComponent component to an object. And the corresponding values are the data type of the props. Then We pass in the values for the props when we reference the component in App. If we pass in prop values that don’t match the type specified, we get an error.</p>

        <p>3. Tell us the difference between nodejs and express js.</p>
        <p><b>Ans.</b>Node JS is a web application framework that provides a robust set of features for web and mobile applications. which provides the JavaScript run-time environment. Express js is a framework which we use to handle server side request </p>

        <p>4. What is a custom hook, and why will you create a custom hook?</p>
        <p><b>Ans.</b>In js custom hook is like a ready made code which is reusable. To make our code more cleaner and to void multiplication we use custom hooks</p>
        </Container>
    );
};

export default Blog;