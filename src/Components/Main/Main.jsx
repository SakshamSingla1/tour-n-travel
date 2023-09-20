import React from "react";
import './main.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'

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
    // Add more destination objects with unique IDs as needed
]

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
