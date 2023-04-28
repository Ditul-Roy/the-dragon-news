import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg1.png'


const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button variant="outline-primary mb-2"><FaGoogle/>Loginwith google</Button>
            <Button variant="outline-secondary"><FaGithub/>Login with github</Button>
            <div className='mt-2'>
                <h4>Find us</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;