import React from 'react';
import { Card } from 'react-bootstrap';
import {  FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url} = news;

    return (
        <div>
            <h3 className='text-danger text-center '>Dragon news in here</h3>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link className="btn btn-danger" to="/catagory/0">
                        <FaArrowLeft></FaArrowLeft>
                        go back</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;