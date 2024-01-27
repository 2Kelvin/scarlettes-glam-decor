import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            {/* insert scarlette */}
            <ul className='navbarList'>
                <li>HOME</li>
                <li>PACKAGES</li>
                <li>FEEDBACK</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    );
}