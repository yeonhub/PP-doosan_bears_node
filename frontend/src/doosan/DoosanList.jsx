import React from 'react';
import { DoosanPlayerData } from '../assets/api/DoosanData';
import { HeaderContext } from './Header';

const DoosanList = ({ children }) => {
    const onSelect = React.useContext(HeaderContext);

    return (
        <ul className='list'>
            {DoosanPlayerData.map(item => (
                <li key={item.id} data-id={item.id} onClick={() => onSelect(item.no, item.nameno)}>
                    <img src={item.imgurl} alt={item.name} />
                    <p>
                        <em>{item.no}</em>
                        <strong>{item.position}</strong>
                    </p>
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default DoosanList;
