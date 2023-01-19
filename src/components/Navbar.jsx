import { useState } from "react";
import './Navbar.css'
import Dropdown from "./Dropdown";
import HamburgerIcon from '../assets/hamburger.svg'
import CloseIcon from '../assets/close.svg'

import React from 'react'

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    const handleMenu = () => setMenu(!menu);

    return (
        <>
            <nav className="navbar">
                <p className="navbar-logo">Company</p>

                <div className="navbar-hamburger" onClick={handleMenu}>
                    <img src={menu ? CloseIcon : HamburgerIcon} alt="navbar-toggle" />
                </div>

                <ul className={menu ? 'navbar-menu active' : 'navbar-menu'}>
                    <li className="menu-item"
                        onMouseEnter={() => setDropDown(true)}
                        onMouseLeave={() => setDropDown(false)}>
                        About
                        {dropDown && <Dropdown />}
                    </li>

                    <li className="menu-item">Our Work</li>
                    <li className="menu-item">Our Team</li>
                    <li className="menu-item">Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar