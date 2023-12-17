import React, { useState } from 'react';
import DoosanMenuUI from './DoosanMenuUI';

const DoosanMenu = ({ data, statData }) => {
    const [content, setContent] = useState('DoosanProfile');

    const onMenuClick = (menu) => {
        setContent(menu);
    };

    // return (
    //     <DoosanMenuUI content={content} onMenuClick={onMenuClick} />
    // );
};

export default DoosanMenu;