import './Socials.css';
import insta from './../../images/icons/instagram.png';
import fb from './../../images/icons/fb.png';
import tiktok from './../../images/icons/tiktok.png';


export default function Socials() {
    return (
        <div className='mediaIconsDiv'>
            <a href='https://www.facebook.com/profile.php?id=100068952905326&mibextid=2JQ9oc' target='blank'>
                <img loading='lazy' src={fb} alt='Facebook' className='iconMedia' />
            </a>
            <a href='https://www.tiktok.com/@scarlettesglamdecor?_t=8jkS6FDi7ef&_r=1' target='blank'>
                <img loading='lazy' src={tiktok} alt='Tiktok' className='iconMedia' />
            </a>
            <a href='https://instagram.com/scarlettesglam?igshid=NTA5ZTk1NTc=' target='blank'>
                <img loading='lazy' src={insta} alt='Instagram' className='iconMedia' />
            </a>
        </div>
    );
}