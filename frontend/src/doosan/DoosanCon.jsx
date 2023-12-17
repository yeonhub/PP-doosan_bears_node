import React from 'react';
import DoosanProfile from './DoosanProfile';
import DoosanStat from './DoosanStat';
import DoosanClub from './DoosanClub';
import DoosanNews from './DoosanNews';
import DoosanYoutube from './DoosanYoutube';

// 컴포넌트 호출 방법 고려해 볼 것
const componentMap = {
    DoosanProfile, DoosanStat, DoosanClub, DoosanNews, DoosanYoutube
};

const DoosanCon = ({ data, statData, content }) => {
    const Component = componentMap[content] || null;

    return (
        <div className='con'>
            {Component && <Component data={data} statData={statData} />}
        </div>
    );
};

export default DoosanCon;