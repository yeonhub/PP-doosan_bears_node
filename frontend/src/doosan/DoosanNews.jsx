import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoosanNews = ({ data }) => {

    // SOLID 원칙 고려해 볼 것
    const { no, name } = data;
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/news', {
                params: {
                    query: `${name}`,
                },
            })
            .then((response) => {
                const items = response.data.items.map((item) => ({
                    title: item.title.replace(/<\/?b>/g, '').replace(/&apos;/g, '').replace(/&amp;/g, '').replace(/&quot;/g, ''),
                    description: item.description ? item.description.replace(/<\/?b>/g, '').replace(/&apos;/g, '').replace(/&amp;/g, '').replace(/&quot;/g, '') : "(포토기사입니다)",
                    link: item.link
                }));
                setNewsItems(items);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [name]);

    return (
        <div className='news'>
            <p className='noth'>두산베어스 NO.{no}</p>
            <p className='nameth'>{name}</p>
            <p className='naversports'><a href="https://sports.news.naver.com/index"><img src="./images/naversports.png" alt="naversports" /></a></p>
            {
                newsItems.map((item, index) => (
                    <ul className='newsUl' key={index}>
                        <li className='newsLi'>
                            <a className='newsA' href={item.link}>
                                <p className='title'>{item.title}</p>
                                <p className='desc'>{item.description}</p>
                            </a>
                        </li>
                    </ul>
                ))
            }
        </div>
    );
};

export default DoosanNews;