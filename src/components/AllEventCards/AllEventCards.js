import './AllEventCards.css';
import ReusableEventCard from '../ReusableEventCard/EventCard';
import { GiBabyFace, GiEngagementRing, GiOppositeHearts } from "react-icons/gi";
import { FaGraduationCap, FaChampagneGlasses } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineCorporateFare } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
// importing event background images
import wedBg from './../../images/weddings/wedding5.jpg';
import picnBg from './../../images/picnics/picnic3.jpg';
import gradBg from './../../images/graduations/graduation2.jpg';
import annivBg from './../../images/anniversaries/anniversary3.jpg';
import birthdBg from './../../images/birthdays/birthday5.jpg';
import babyShBg from './../../images/baby showers/babyShower12.jpg';
import proposBg from './../../images/proposals/proposal1.jpg';
import corpoBg from './../../images/corporates/corporates4.jpg';
import bridalBg from './../../images/bridal showers/bridalShowers7.jpg';
import tableSetBg from './../../images/table setups/tableSetup9.jpg';


export default function AllEventCards() {
    return (
        <div className='allEventCards'>
            <ReusableEventCard
                eventBgImage={wedBg}
                eventIcon={<GiOppositeHearts className='cardIcon' />}
                eventName={'Weddings'}
            />
            <ReusableEventCard
                eventBgImage={picnBg}
                eventIcon={<FaChampagneGlasses className='cardIcon' />}
                eventName={'Picnics'}
            />
            <ReusableEventCard
                eventBgImage={gradBg}
                eventIcon={<FaGraduationCap className='cardIcon' />}
                eventName={'Graduations'}
            />
            <ReusableEventCard
                eventBgImage={annivBg}
                eventIcon={<BsCalendarDateFill className='cardIcon' />}
                eventName={'Anniversaries'}
            />
            <ReusableEventCard
                eventBgImage={birthdBg}
                eventIcon={<LiaBirthdayCakeSolid className='cardIcon' />}
                eventName={'Birthdays'}
            />
            <ReusableEventCard
                eventBgImage={babyShBg}
                eventIcon={<GiBabyFace className='cardIcon' />}
                eventName={'Baby Showers'}
            />
            <ReusableEventCard
                eventBgImage={proposBg}
                eventIcon={<GiEngagementRing className='cardIcon' />}
                eventName={'Proposals'}
            />
            <ReusableEventCard
                eventBgImage={corpoBg}
                eventIcon={<MdOutlineCorporateFare className='cardIcon' />}
                eventName={'Corporates'}
            />
            <ReusableEventCard
                eventBgImage={bridalBg}
                eventIcon={<MdOutlineCorporateFare className='cardIcon' />}
                eventName={'Bridal Showers'}
            />
            <ReusableEventCard
                eventBgImage={tableSetBg}
                eventIcon={<MdOutlineCorporateFare className='cardIcon' />}
                eventName={'Table Setups'}
            />
        </div>
    );
}