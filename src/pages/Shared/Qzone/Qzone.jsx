import React from 'react';
import Qzon1 from '../../../assets/qZone1.png'
import Qzon2 from '../../../assets/qZone2.png'
import Qzon3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-info my-4 py-4'>
            <h4 className='text-center'>Q-Zone</h4>
            <div>
                <img src={Qzon1} alt="" />
                <img src={Qzon2} alt="" />
                <img src={Qzon3} alt="" />
            </div>
            
        </div>
    );
};

export default Qzone;