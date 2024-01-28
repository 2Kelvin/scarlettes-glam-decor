import './GallerySlider.css';
import { TfiClose } from "react-icons/tfi";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import pic from './../../images/cool.jpg';


export default function GallerySlider({ handleDeactivateGallery, imgSrc, imgAlt }) {
    return (
        <div className='gallery'>
            <div className='closeGalleryDiv'>
                <TfiClose
                    className='iconClose'
                    onClick={handleDeactivateGallery}
                />
            </div>
            <div className='sliderButtons'>
                <MdSkipPrevious className='iconSliders' />
                <MdSkipNext className='iconSliders' />
            </div>
            {/* replace 'pic' below with imgSrc */}
            <img src={pic} alt={imgAlt} />
        </div>
    );
}