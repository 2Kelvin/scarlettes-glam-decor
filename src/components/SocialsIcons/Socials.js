import './Socials.css';
import insta from './../../images/icons/instagram.png';
import fb from './../../images/icons/fb.png';
import tiktok from './../../images/icons/tiktok.png';
import whatsapp from './../../images/icons/whatsapp.png';

export default function Socials() {
    return (
        <div className='mediaIconsDiv'>
            <img src={fb} alt='Facebook' className='iconMedia' />
            <img src={tiktok} alt='Tiktok' className='iconMedia' />
            <img src={insta} alt='Instagram' className='iconMedia' />
            <img src={whatsapp} alt='Whatsapp' className='iconMedia' />
        </div>
    );
}