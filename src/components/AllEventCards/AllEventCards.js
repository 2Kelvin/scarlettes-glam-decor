import './AllEventCards.css';
import ReusableEventCard from '../ReusableEventCard/EventCard';
import pic from './../../images/cool.jpg';
import { GiBabyFace, GiEngagementRing, GiOppositeHearts } from "react-icons/gi";
import { FaGraduationCap, FaChampagneGlasses } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineCorporateFare } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";


export default function AllEventCards() {
    return (
        <div className='allEventCards'>
            <ReusableEventCard eventBgImage={pic} eventIcon={<GiOppositeHearts className='cardIcon' />} eventName={'Weddings'} />
            <ReusableEventCard eventBgImage={pic} eventIcon={<FaChampagneGlasses className='cardIcon' />} eventName={'Picnics'} />
            <ReusableEventCard eventBgImage={pic} eventIcon={<FaGraduationCap className='cardIcon' />} eventName={'Graduations'} />
            <ReusableEventCard eventBgImage={pic} eventIcon={<BsCalendarDateFill className='cardIcon' />} eventName={'Anniversaries'} />
            <ReusableEventCard eventBgImage={pic} eventIcon={<LiaBirthdayCakeSolid className='cardIcon' />} eventName={'Birthdays'} />
            <ReusableEventCard eventBgImage={pic} eventIcon={<GiBabyFace className='cardIcon' />} eventName={'Baby Showers'} />
            <ReusableEventCard eventBgImage={pic} eventIcon={<GiEngagementRing className='cardIcon' />} eventName={'Proposals'} />
            <ReusableEventCard eventBgImage={pic} eventIcon={<MdOutlineCorporateFare className='cardIcon' />} eventName={'Corporates'} />
        </div>
    );
}

// Packages 
// weddings
// picnics
// graduations
// anniversaries
// birthdays
// baby showers
// proposals
// cooporates