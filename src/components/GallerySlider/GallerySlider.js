import './GallerySlider.css';
import { TfiClose } from "react-icons/tfi";
import { GrNext, GrPrevious } from "react-icons/gr";


export default function GallerySlider() {
    return (
        <div className='gallery'>
            <div className='closeGalleryDiv'>
                <TfiClose className='iconClose' />
            </div>
            <div className='sliderButtons'>
                <GrPrevious />
                <GrNext />
            </div>
            <img src='' alt='' />
        </div>
    );
}