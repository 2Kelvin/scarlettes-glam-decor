import './whatsapp.css';
import whatsapp from './../../images/icons/whatsappRound.png';



export default function WhatsappPopUp() {
    return (
        <div className='popUp'>
            <p className='chat'>Chat with us</p>
            <a href='https://wa.me/254772775311' target='blank'>
                <img src={whatsapp} alt='Whatsapp' className='whatsapp' />
            </a>
        </div>
    );
}