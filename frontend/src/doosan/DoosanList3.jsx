import React from 'react';
import dataList from '../assets/api/DoosanData';

const DoosanList = ({onSelect }) => {
    return (
        <>
            <ul className='list'>
                {dataList.map(item => (
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
        </>
    );
};

export default DoosanList;
