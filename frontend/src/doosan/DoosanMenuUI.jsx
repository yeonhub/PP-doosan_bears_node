import React from 'react';
import DoosanCon from './DoosanCon';

const DoosanMenuUI = ({ content, onMenuClick }) => {
    return (
        <div className='menubox'>
            <ul className='menu'>
                {/* 각 메뉴 항목 */}
                {/* ... */}
            </ul>
            <DoosanCon content={content} />
        </div>
    );
};

export default DoosanMenuUI;
