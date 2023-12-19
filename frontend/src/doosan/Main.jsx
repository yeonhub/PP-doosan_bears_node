import React, { useState } from 'react';
import '../assets/css/reset.css'
import './Main.scss'
// import dataList from '../assets/api/DoosanData';
// import statDataMap from '../assets/api/DoosanMap'
import { Header } from './Header';
import DoosanList from './DoosanList';
import DoosanInfo from './DoosanInfo';

const Main = () => {

    // CCP 및 SOLID 적용해볼 것
    // const [statData, setStatData] = useState(ysh53)
    // const [data, setData] = useState(dataList[0])
    // const onSelect = (no, noname) => {
    //     const idx = dataList.findIndex(item => item.no === no);
    //     setData(dataList[idx])
    //     setStatData(statDataMap[noname]);
    // };
    return (
        <>
            <Header>
                <Header.Logo />
                <DoosanInfo/>
                <DoosanList/>
            </Header>
        </>
    );
};

export default Main;