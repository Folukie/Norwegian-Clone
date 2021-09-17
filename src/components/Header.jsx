import React from "react";
import { FiUser } from "react-icons/fi";
import { RiBriefcaseLine } from "react-icons/ri";
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";



const Header = () => {
  return (
    <header>
      <div className="left-header">
        <GiHamburgerMenu className="nav"/>
        <FiUser className="icon" />
        <Link to='/men' className='link' >men</Link>
        <Link to ='/' className='link'>women</Link>
        <Link to ='/' className='link'>accessories</Link>
        <Link to ='/' className='link'>unisex</Link>
      </div>
      <div className="title">
        <p>Norwegian Rain & T/MICHAEL</p>
        <small>TOKYO STORE</small>
      </div>
      <div className="right-header">
        <Link to ='/' className='link'>store</Link>
        <Link to ='/' className='link'>brand</Link>
        <Link to ='/' className='link'>eco</Link>
        <Link to ='/' className='link'>journal</Link>
        <RiBriefcaseLine className="icon"/>
      </div>
    </header>
  );
};

export default Header;
