import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatacories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res=>res.json())
        .then(data => setCatacories(data))
        .catch(error=>console.log(error))
    } ,[])
    return (
        <div>
            <h3>The News</h3>
            {
                catagories.map(catagory => <p
                key={catagory.id}
                >
                    <Link to={`/catagory/${catagory.id}`} className='text-decoration-none text-success
                    '>{catagory.name}</Link>
                </p>)

            }
        </div>
    );
};

export default LeftNav;