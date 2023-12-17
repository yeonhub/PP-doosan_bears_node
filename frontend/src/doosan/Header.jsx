import React from 'react';

const Header = ({ children }) => {
    return (
        <>
            <div id='wrap'>
                <div id='content'>
                    <div className='inner'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};
const HeaderLogo = () => {
    return (
        <>
            <div className='img'>
                <img className='logo' src='../images/doosanlogo.png' alt='' />
            </div>
        </>
    );
};

Header.Logo = HeaderLogo

export { Header };