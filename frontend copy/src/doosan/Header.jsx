// Header.jsx
import React, { createContext, useState } from 'react';
import { DSPlayerData } from '../assets/api/DSPlayerData'
const HeaderContext = createContext();


const Header = ({ children }) => {
    const [currentPlayer, setCurrentPlayer] = useState(DSPlayerData[0]);

    const selectPlayer = (nameno) => {
        const updatedPlayer = DSPlayerData.find(data => data.nameno === nameno);
        setCurrentPlayer(updatedPlayer);
        console.log(updatedPlayer);
    };

    return (
        <HeaderContext.Provider value={{ selectPlayer, currentPlayer }}>
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
