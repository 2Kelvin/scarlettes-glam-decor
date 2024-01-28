import './EventCard.css';


export default function ReusableEventCard({ eventBgImage, eventIcon, eventName, handleActivateGallery }) {

    return (
        <div className='reusableEventCard' style={{ backgroundImage: `url(${eventBgImage})` }}>
            <button className='eventNameAndIcon' onClick={handleActivateGallery}>
                {eventIcon}
                <h3>{eventName}</h3>
            </button>
        </div>
    );
}