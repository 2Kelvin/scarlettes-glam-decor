import './GallerySlider.css';
import { TfiClose } from "react-icons/tfi";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { useState } from 'react';


export default function GallerySlider({ handleDeactivateGallery, picsData, nameOfEvent }) {
    const [eachPicIndex, setEachPicIndex] = useState(0);
    let onePicture = picsData[eachPicIndex];

    const cantGoNext = eachPicIndex === picsData.length - 1;
    const cantGoPrev = eachPicIndex === 0;

    function handlePrevImage() {
        if (!cantGoPrev) {
            setEachPicIndex(eachPicIndex - 1);
        }
    }

    function handleNextImage() {
        if (!cantGoNext) {
            setEachPicIndex(eachPicIndex + 1);
        }
    }

    return (
        <div className='gallery'>

            <div className='closeGalleryDiv'>
                <TfiClose
                    className='iconClose'
                    onClick={handleDeactivateGallery}
                />
            </div>

            <div className='sliderButtons'>
                <button disabled={cantGoPrev}>
                    <MdSkipPrevious
                        className='iconSliders'
                        onClick={handlePrevImage}
                    />
                </button>
                <button disabled={cantGoNext}>
                    <MdSkipNext
                        className='iconSliders'
                        onClick={handleNextImage}
                    />
                </button>
            </div>

            <img src={onePicture.src} alt={onePicture.alt} />

            <p className='imgDetails'>
                {`${nameOfEvent}: ${eachPicIndex}/${picsData.length}`}
            </p>
        </div>
    );
}