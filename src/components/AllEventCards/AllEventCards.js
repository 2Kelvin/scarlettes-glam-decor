import './AllEventCards.css';
import ReusableEventCard from '../ReusableEventCard/EventCard';
import pic from './../../images/cool.jpg';
import { GiBabyFace, GiEngagementRing, GiOppositeHearts } from "react-icons/gi";
import { FaGraduationCap, FaChampagneGlasses } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineCorporateFare } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import GallerySlider from '../GallerySlider/GallerySlider';


export default function AllEventCards({activeGallery, handleActivateGallery, handleDeactivateGallery}) {
    return (
        <div className='allEventCards'>
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<GiOppositeHearts className='cardIcon' />}
                eventName={'Weddings'}
                handleActivateGallery={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<FaChampagneGlasses className='cardIcon' />}
                eventName={'Picnics'}
                handleActivateGallery={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<FaGraduationCap className='cardIcon' />}
                eventName={'Graduations'}
                handleActivateGallery={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<BsCalendarDateFill className='cardIcon' />}
                eventName={'Anniversaries'}
                handleActivateGallery={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<LiaBirthdayCakeSolid className='cardIcon' />}
                eventName={'Birthdays'}
                handleActivateGallery={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<GiBabyFace className='cardIcon' />}
                eventName={'Baby Showers'}
                handleActivateGallery={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<GiEngagementRing className='cardIcon' />}
                eventName={'Proposals'}
                handleActivateGallery={handleActivateGallery}
            />
            <ReusableEventCard
                eventBgImage={pic}
                eventIcon={<MdOutlineCorporateFare className='cardIcon' />}
                eventName={'Corporates'}
                handleActivateGallery={handleActivateGallery}
            />

            {activeGallery ? <GallerySlider handleDeactivateGallery={handleDeactivateGallery} /> : null}
        </div>
    );
}