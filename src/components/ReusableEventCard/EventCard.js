import './EventCard.css';


export default function ReusableEventCard({ eventBgImage, eventIcon, eventName }) {
    return (
        <div className='reusableEventCard' style={{ backgroundImage: eventBgImage }}>
            <div className='eventNameAndIcon'>
                {eventIcon}
                <h3>{eventName}</h3>
            </div>
        </div>
    );
}