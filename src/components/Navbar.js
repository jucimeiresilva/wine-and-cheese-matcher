import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/wine&cheese.png' 



const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <NavLink to="/" className="link">
                    <img className='logo' src={logo} alt="site logo"/>
                </NavLink>
                <div className='nav-links d-flex justify-content-between' style={{width:"250px"}}> 
                <NavLink to='/wines' className="link">
                    Wine List
                </NavLink>
                <NavLink to='/favorites' className="link">
                    ☆ Favorites
                </NavLink>
                <NavLink to='/about' className='link'>
                    About
                </NavLink>
                </div>
            </div>  
         </nav>
    );
};

export default NavBar;