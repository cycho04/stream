import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>LoGO</Link>
            <div className='right item'>
                <Link to='/' className='item'>All Streams</Link>
            </div>
        </div>
    )
    
};

export default Header;