import React from 'react';
import '../Home/Home.css'
import Main from './HomeBlocks/Main/Main';
import PLNG from '../Home/HomeBlocks/PLNG/PLNG'

const Home = () => {
    return (
        <div className='Home'>
            <Main/>
            <PLNG/>
        </div>
    );
}

export default Home;