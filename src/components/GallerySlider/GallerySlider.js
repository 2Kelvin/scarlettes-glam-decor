import './GallerySlider.css';
import { TfiClose } from "react-icons/tfi";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import pic from './../../images/cool.jpg';
import { useState } from 'react';


export default function GallerySlider({ handleDeactivateGallery, picsData }) {
    const [eachPicIndex, setEachPicIndex] = useState(0);
    let onePicture = picsData[eachPicIndex];

    // picsData -> is an array of picture objects

    return (
        <div className='gallery'>
            {/* close gallery button */}
            <div className='closeGalleryDiv'>
                <TfiClose
                    className='iconClose'
                    onClick={handleDeactivateGallery}
                />
            </div>
            {/* slider buttons */}
            <div className='sliderButtons'>
                <MdSkipPrevious className='iconSliders' onClick={() => setEachPicIndex (eachPicIndex - 1)} />
                <MdSkipNext className='iconSliders' onClick={() => setEachPicIndex(eachPicIndex + 1)} />
            </div>
            {/* image */}
            <img src={onePicture.src} alt={onePicture.alt} />
        </div>
    );
}