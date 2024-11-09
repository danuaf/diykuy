// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaList, FaUser } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/explore" activeClassName="active">
                <FaHome className="icon" />
                <span>Explore</span>
            </NavLink>
            <NavLink to="/materials" activeClassName="active">
                <FaList className="icon" />
                <span>Materials</span>
            </NavLink>
            <NavLink to="/profile" activeClassName="active">
                <FaUser className="icon" />
                <span>Profile</span>
            </NavLink>
        </nav>
    );
}

export default Navbar;
