import React from "react";
import './main.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'


import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Santorini',
        location: 'Greece',
        grade: 'SCENIC BEAUTY',
        fees: '$800',
        description: 'Santorini offers stunning views of the Aegean Sea, beautiful sunsets, and white-washed buildings. It\'s a dream destination for many travelers.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Kyoto',
        location: 'Japan',
        grade: 'CULTURAL HERITAGE',
        fees: '$600',
        description: 'Kyoto is famous for its rich history, traditional temples, and beautiful cherry blossoms. Explore the ancient culture of Japan here.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Paris',
        location: 'France',
        grade: 'ROMANTIC GETAWAY',
        fees: '$900',
        description: 'The city of love, Paris, is renowned for its iconic landmarks such as the Eiffel Tower and the Louvre Museum. Explore the romantic charm of Paris.'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'HISTORICAL ADVENTURE',
        fees: '$1000',
        description: 'Discover the ancient ruins of Machu Picchu, an archaeological wonder set high in the Andes Mountains of Peru.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Venice',
        location: 'Italy',
        grade: 'ROMANTIC CANALS',
        fees: '$850',
        description: 'Venice, known for its winding canals and historic architecture, offers a unique and romantic travel experience.'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Cairo',
        location: 'Egypt',
        grade: 'HISTORICAL TREASURES',
        fees: '$750',
        description: 'Explore the wonders of ancient Egypt in Cairo, home to the Great Pyramids and the Sphinx.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Rio de Janeiro',
        location: 'Brazil',
        grade: 'VIBRANT CULTURE',
        fees: '$950',
        description: 'Experience the lively culture and beautiful beaches of Rio de Janeiro, Brazil.'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Sydney',
        location: 'Australia',
        grade: 'ICONIC LANDMARKS',
        fees: '$800',
        description: 'Visit iconic landmarks such as the Sydney Opera House and Bondi Beach in Sydney, Australia.'
    },
    {
        id: 10,
        imgSrc: img10,
        destTitle: 'Cancun',
        location: 'Mexico',
        grade: 'TROPICAL PARADISE',
        fees: '$900',
        description: 'Relax on the pristine beaches and enjoy the vibrant nightlife of Cancun, Mexico.'
    }
    // Add more destinations as needed
];

const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main;
