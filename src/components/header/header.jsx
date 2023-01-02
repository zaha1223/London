import React from "react";
import "./../header/header.css"
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/img/header_logo.png"

const Header = ()=>{
    return(
        <header className="headers">
            <div className="container">
                <nav className="headers_nav">
                    <img src={HeaderLogo} alt="" />
                    <ul className="headers_list">
                        <Link to='/menu' className="headers_list_link1">Menu</Link>
                        <Link to='/news' className="headers_list_link2">News</Link>
                        <Link to='/about' className="headers_list_link3">About Us</Link>
                        <Link to='/contact' className="headers_list_link4">Contact Us</Link>
                        {/* <Link to='/' className="headers_list_link5">Log in</Link>                         */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header