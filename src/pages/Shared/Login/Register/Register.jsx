import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProder/AuthProvider';

const Register = () => {
    const {createUsers} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUsers(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleChack = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Container className='mx-auto w-25 mt-4 border'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleChack}
                    type="checkbox" 
                    label="accept terms and conditions" />
                </Form.Group>
                <Button variant="primary" disabled={!accepted } type="submit">
                    Register
                </Button>
                <Form.Group>
                    Already have an account ! please <Link to="/login">Log in</Link>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Register;