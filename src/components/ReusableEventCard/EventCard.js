import './EventCard.css';
import { picturesData } from '../../eventPicturesData';
import GallerySlider from '../GallerySlider/GallerySlider';
import { useState } from 'react';
// import { weddings } from '../../data/weddingPics';

export default function ReusableEventCard({ eventBgImage, eventIcon, eventName }) {
    const [showGallery, setShowGAllery] = useState(false);
    let clickedEventPics;

    function handleActivateGallery() {
        setShowGAllery(true);
    }

    function handleDeactivateGallery() {
        setShowGAllery(false);
    }

    function getClickedEventPics(nameOfEvent) {
        for (const eachEventData of picturesData) {
            if (nameOfEvent.toLowerCase() === eachEventData.name) {
                clickedEventPics = eachEventData.data;
            }
        }
        return clickedEventPics;
    }

    return (
        <div className='reusableEventCard' style={{ backgroundImage: `url(${eventBgImage})` }}>
            <button className='eventNameAndIcon' onClick={handleActivateGallery}>
                {eventIcon}
                <h3>{eventName}</h3>
            </button>
            {showGallery && <GallerySlider
                picsData={getClickedEventPics(eventName)}
                handleDeactivateGallery={handleDeactivateGallery}
            />}
        </div>
    );
}