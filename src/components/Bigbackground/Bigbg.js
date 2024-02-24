import './Bigbg.css';
import bgPicture from './../../images/picnics/picnic3.jpg';

export default function Bigbg() {
    return (
        <section className="bigBg">
            <div>
                <img src={bgPicture} alt='main background' loading='lazy' />
            </div>
            <h2>Event Planning & Decoration Services</h2>
        </section>
    );
}