// import MenuIcon from '../MenuIcon/MenuIcon';
import './Navbar.css';
import logo from './../../images/logo.png';


export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt='logo' className='websiteLogo' id='homeDecor' />
            <ul className='menuLinks'>
                <a href='#homeDecor'>Home</a>
                <a href='#packagesDecor'>Packages</a>
                <a href='#feedbackDecor'>Feedback</a>
                <a href='#contactDecor'>Contact</a>
            </ul>
        </nav>
    );
}