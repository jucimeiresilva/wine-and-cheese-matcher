import React from 'react';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <NavLink to="/" className="link">
                    <span className='logo'>Logo</span>
                </NavLink>
                <div className='nav-links d-flex justify-content-between' style={{width: "200px"}}> 
                <NavLink to='/wines' className="link">
                    Wine List
                </NavLink>
                <NavLink to='/favorites' className="link">
                    ☆ Favorites
                </NavLink>

                </div>
            </div>  
         </nav>
    );
};

export default NavBar;