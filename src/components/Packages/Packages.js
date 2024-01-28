import AllEventCards from '../AllEventCards/AllEventCards';
import './Packages.css';
import { useState } from 'react';


export default function Packages() {
    const [activeGallery, setActiveGallery] = useState(false);

    function handleActivateGallery() {
        setActiveGallery(true);
    }

    function handleDeactivateGallery() {
        setActiveGallery(false);
    }

    return (
        <section className='packages'>
            <h2>Our Packages</h2>
            <AllEventCards
                activeGallery={activeGallery}
                handleActivateGallery={handleActivateGallery}
                handleDeactivateGallery={handleDeactivateGallery}
            />
        </section>
    );
}