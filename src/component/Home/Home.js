import React from 'react';
import Event from '../Event/Event';

const events = [
    {
        name: 'Md Nahid',
        img: 'animalShelter.png'
    },
    {
        name: 'Mh Murshed',
        img: 'https://ibb.co/s1xqr1j'
    },
    {
        name: 'Md Robin',
        img: 'https://ibb.co/t2zStCd'
    },
    {
        name: 'Shamim',
        img: 'https://ibb.co/Rv6RDrh'
    },
]


const Home = () => {
    return (
        <div>
            <h1>i am home</h1>
             {
                 events.map(event => <Event event={event}/>)
             }
        </div>
    );
};

export default Home;