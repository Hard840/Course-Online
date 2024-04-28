import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className='Header'>
            <h1>ONLINE COURSE</h1>
           <div className="nav-menu">
           <Link to='/'>Home</Link>            
           <Link to='/'>Home</Link>            
           <Link to='/'>Home</Link>            
           </div>
        </div>
    );
}

export default Header;
