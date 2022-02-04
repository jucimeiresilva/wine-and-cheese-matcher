import React from 'react';

export const NavBar = () => {
    return (
        <nav className='navbar'>
            <NavLink to="/" className="link">
                <span className='logo'>Logo</span>
            </NavLink>
            <div className='nav-links'> 
             <NavLink to='/wines' classname="link">
                 Wine List
             </NavLink>
             <NavLink to='/favorites' className="link">
                 Favorites
             </NavLink>
            </div>  
         </nav>
    );
};

