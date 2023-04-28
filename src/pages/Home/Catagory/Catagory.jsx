import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsDetails from '../NewsDetails/NewsDetails';

const Catagory = () => {
    const {id} = useParams();
    const Newscatagories = useLoaderData();
    return (
        <div>
            {id && <h3>this is catagory: {Newscatagories.length}</h3>}
            {
                Newscatagories.map(news => <NewsDetails
                key={news._id}
                news = {news}
                ></NewsDetails>)
            }
        </div>
    );
};

export default Catagory;