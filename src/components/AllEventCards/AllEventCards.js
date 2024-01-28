import './AllEventCards.css';
import ReusableEventCard from '../ReusableEventCard/EventCard';
import pic from './../../images/cool.jpg';
import { GiBabyFace, GiEngagementRing, GiOppositeHearts } from "react-icons/gi";
import { FaGraduationCap, FaChampagneGlasses } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineCorporateFare } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import { useState } from 'react';


export default function AllEventCards() {
    const [activeGallery, setActiveGallery] = useState(false);
    function handleActivateGallery() {
        setActiveGallery(true);
    }

    return (
        <div className='allEventCards'>
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<GiOppositeHearts className='cardIcon' />}
                eventName={'Weddings'}
                onClick={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<FaChampagneGlasses className='cardIcon' />}
                eventName={'Picnics'}
                onClick={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<FaGraduationCap className='cardIcon' />}
                eventName={'Graduations'}
                onClick={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<BsCalendarDateFill className='cardIcon' />}
                eventName={'Anniversaries'}
                onClick={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<LiaBirthdayCakeSolid className='cardIcon' />}
                eventName={'Birthdays'}
                onClick={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<GiBabyFace className='cardIcon' />}
                eventName={'Baby Showers'}
                onClick={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<GiEngagementRing className='cardIcon' />}
                eventName={'Proposals'}
                onClick={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<MdOutlineCorporateFare className='cardIcon' />}
                eventName={'Corporates'}
                onClick={handleActivateGallery}
            />
        </div>
    );
}