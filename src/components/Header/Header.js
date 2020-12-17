import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="header" >
            <nav>
                <a className="logoStyle">
                Online Course</a>
                <a href="/course">Course</a>
                <a href="/login">Login</a>
                <a href="/order">Course Review</a>
                <a href="/manage">Course Manage</a>
            </nav>
            </div>
           
        </div>
    );
};

export default Header;