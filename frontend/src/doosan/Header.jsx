import React, { createContext } from 'react';
const HeaderContext = React.createContext()


const Header = ({ children }) => {
    const [statData, setStatData] = useState(ysh53)
    const [data, setData] = useState(dataList[0])
    const statDataMap = { ysh53, yej25, kjh52, kdh37, jsb31, hkm13, csh51 };
    const onSelect = (no, noname) => {
        const idx = dataList.findIndex(item => item.no === no);
        setData(dataList[idx])
        setStatData(statDataMap[noname]);
    };
    return (
        <>
            <HeaderContext.Provider value={onSelect}>
                <div id='wrap'>
                    <div id='content'>
                        <div className='inner'>
                            {children}
                        </div>
                    </div>
                </div>
            </HeaderContext.Provider>
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