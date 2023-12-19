import React from 'react';
import DoosanImg from './DoosanImg';
import DoosanMenu from './DoosanMenu';

const DoosanInfo = ({ data, statData}) => {
    return (
        <div className='info'>
            <DoosanImg data={data} />
            <DoosanMenu data={data} statData={statData} />
        </div>
    );
};

export default DoosanInfo;