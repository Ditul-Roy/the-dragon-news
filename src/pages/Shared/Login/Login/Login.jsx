import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProder/AuthProvider';

const Login = () => {
    const {loginUsers} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/catagory/0'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUsers(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from)

        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <Container className='mx-auto w-25 mt-4 border'>
            <h3>Please login</h3>
            <Form onSubmit={handleLogin }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    log in
                </Button>
                <Form.Group>
                    Dont have an account ! please <Link to="/register">Register</Link>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Login;