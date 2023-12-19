import React, { createContext, useState } from 'react';
import { DoosanPlayerData, statDataMap } from '../assets/api/DoosanData';

const HeaderContext = createContext();

const Header = ({ children }) => {
    const [selectedPlayer, setselectedPlayer] = useState('ysh53');
    const [selectedPlayerData, setselectedPlayerData] = useState(DoosanPlayerData[0]);

    const onSelect = (no, noname) => {
        console.log(no);
        const idx = DoosanPlayerData.findIndex(item => item.no === no);
        setselectedPlayerData(DoosanPlayerData[idx]);
        setselectedPlayer(statDataMap[noname]);
    };

    return (
        <HeaderContext.Provider value={{onSelect, selectedPlayerData}}>
            <div id='wrap'>
                <div id='content'>
                    <div className='inner'>
                        {children}
                    </div>
                </div>
            </div>
        </HeaderContext.Provider>
    );
};

const HeaderLogo = () => {
    return (
        <div className='img'>
            <img className='logo' src='../images/doosanlogo.png' alt='' />
        </div>
    );
};

Header.Logo = HeaderLogo;

export { Header, HeaderContext };
