import React, { useEffect, useState } from 'react';
import { HeaderContext } from './Header'

const DoosanImg = ({ children }) => {
    const selectedPlayerData = React.useContext(HeaderContext);
    // 컴포넌트 분리 예상
    const images = selectedPlayerData.images
    const [big, setBig] = useState(images[0].tn)

    useEffect(() => {
        setBig(images[0].tn);
    }, [images]);

    const onTn = e => {
        setBig(e.target.src)
    }

    return (
        <div className='gallery'>
            <div className="bigimgbox">
                <img className='bigimg' src={big} alt="" />
            </div>
            <ul>
                {
                    images.map((item, idx) =>
                        <li key={idx}><img className='tn' src={item.tn} alt="" onClick={onTn} /></li>
                    )
                }

            </ul>
        </div>
    );
};

export default DoosanImg;