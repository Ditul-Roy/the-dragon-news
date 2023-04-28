import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment'
import { Container} from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secoundary'><small>Journalism without fear or favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </Container>
    );
};

export default Header;