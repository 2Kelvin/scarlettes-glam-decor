// <----------------- weddings images ----------------->
import fox from './images/weddings/fox.jpg';
import whale from './images/weddings/whale.jpg';
// <----------------- picnics images ----------------->
import jaguar from './images/picnics/jaguar.jpg';
import world from './images/picnics/world.jpg';

const weddingPictures = [
    {
        id: 1,
        src: fox,
        alt: 'Wedding photo'
    },
    {
        id: 2,
        src: whale,
        alt: 'Wedding photo'
    },
];

const picnicPictures = [
    {
        id: 1,
        src: jaguar,
        alt: 'Picnics photo'
    },
    {
        id: 2,
        src: world,
        alt: 'Picnics photo'
    },
];



export const picturesData = [
    { name: 'weddings', data: weddingPictures },
    { name: 'picnics', data: picnicPictures },
];