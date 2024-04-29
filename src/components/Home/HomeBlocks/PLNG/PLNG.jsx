import React from 'react';
import {Link} from 'react-router-dom'
import '../PLNG/PLNG.css'
const PLNG = () => {
    return (
        <div className='PLNG'>
            <Link to='/'>
                <div className='Lng'>HTML&CSS</div>
            </Link>
            <Link to='/'>
                <div className='Lng'>JavaScript</div>
            </Link>
            <Link to='/'>
                <div className='Lng'>Phython</div>
            </Link>
            
        </div>
    );
}

export default PLNG;
