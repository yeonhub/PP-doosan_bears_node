import React, { useState } from 'react';
import '../assets/css/reset.css'
import './Main.scss'
// import DoosanList from './DoosanList';
import DoosanInfo from './DoosanInfo';
import dataList from '../assets/api/DoosanData';
import { ysh53, yej25, kjh52, kdh37, jsb31, hkm13, csh51 } from '../assets/api/DoosanStatData'
import { Header } from './Header';

const Main = () => {

    // CCP 및 SOLID 적용해볼 것
    // const [listData, setListData] = useState(dataList)
    // const [content, setContent] = useState('DoosanProfile')
    const [statData, setStatData] = useState(ysh53)
    const [data, setData] = useState(dataList[0])
    const statDataMap = { ysh53, yej25, kjh52, kdh37, jsb31, hkm13, csh51 };
    const onSelect = (no, noname) => {
        const idx = dataList.findIndex(item => item.no === no);
        setData(dataList[idx])
        setStatData(statDataMap[noname]);
    };
    // const onMenu = (menu) => {
    //     setContent(menu)
    // }
    return (
        <>
            <Header>
                <Header.Logo />
                <DoosanInfo data={data} statData={statData}/>
                {/* <DoosanList listData={listData} onSelect={onSelect} />
                <DoosanInfo data={data} statData={statData} onMenu={onMenu} content={content} /> */}
            </Header>
        </>
    );
};

export default Main;