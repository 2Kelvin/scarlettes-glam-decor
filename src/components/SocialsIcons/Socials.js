import './Socials.css';
import insta from './../../images/icons/instagram.png';
import fb from './../../images/icons/fb.png';
import tiktok from './../../images/icons/tiktok.png';


export default function Socials() {
    return (
        <div className='mediaIconsDiv'>
            <a href=''>
                <img src={fb} alt='Facebook' className='iconMedia' />
            </a>
            <a href=''>
                <img src={tiktok} alt='Tiktok' className='iconMedia' />
            </a>
            <a href=''>
                <img src={insta} alt='Instagram' className='iconMedia' />
            </a>
        </div>
    );
}