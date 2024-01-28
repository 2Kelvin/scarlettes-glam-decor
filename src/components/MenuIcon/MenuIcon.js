import './MenuIcon.css';
import { useState } from 'react';


export default function MenuIcon() {
    const [menuClicked, setMenuClicked] = useState(false);
    return (
        <div
            className={menuClicked ? 'menuContainer change yellow' : 'menuContainer'}
            onClick={() => setMenuClicked(!menuClicked)}
        >
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>

            <ul className={!menuClicked ? 'noDisplay' : 'navbarList'}>
                <li>HOME</li>
                <li>PACKAGES</li>
                <li>FEEDBACK</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
}