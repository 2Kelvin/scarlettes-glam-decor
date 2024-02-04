// import MenuIcon from '../MenuIcon/MenuIcon';
import './Navbar.css';
import logo from './../../images/logo.png';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';


export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <nav>
            <img src={logo} alt='logo' className='websiteLogo' id='homeDecor' />
            <div className='menuLinks'>
                <a href='#homeDecor'>Home</a>
                <a href='#packagesDecor'>Packages</a>
                <a href='#feedbackDecor'>Feedback</a>
                <a href='#contactDecor'>Contact</a>
            </div>
            <IoMenu
                className='topMenuIcon'
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
            {showMobileMenu && <MobileMenu />}
        </nav>
    );
}