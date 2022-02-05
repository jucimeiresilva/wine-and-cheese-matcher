import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className='navbar'>
            <NavLink to="/" className="link">
                <span className='logo'>Logo</span>
            </NavLink>
            <div className='nav-links'> 
             <NavLink to='/wines' className="link">
                 Wine List
             </NavLink>
             <NavLink to='/favorites' className="link">
                 Favorites
             </NavLink>
            </div>  
         </nav>
    );
};

