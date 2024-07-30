// src/components/pages/HomePage.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import BackgroundImage3 from '../../assets/images/wall1.jpg';
import hall1 from '../../assets/images/hall1.jpg';
import hall2 from '../../assets/images/hall2.jpg';
import hall3 from '../../assets/images/hall3.jpg';
import hall4 from '../../assets/images/hall4.jpg';
import hall5 from '../../assets/images/hall5.jpg';
import hall6 from '../../assets/images/hall6.jpg';

export default function HomePage() {
    const rooms = [
        {
            id: 'jennis-hall',
            image: hall1,
            title: "Jennis Hall",
            description: "Jennis Hall offers a grand space ideal for large-scale events such as birthday parties and wedding receptions. Spanning over 3000 sq. ft., this hall can accommodate a significant number of guests comfortably. With elegant decor and versatile seating arrangements, it’s perfect for creating memorable experiences. Our dedicated team will assist you in making every event special.",
        },
        {
            id: 'harrys-hall',
            image: hall2,
            title: "Harry's Hall",
            description: "Harry's Hall is designed to host your grand celebrations with its spacious 4000 sq. ft. area. This hall is perfect for hosting large gatherings like weddings and milestone birthdays. It features stylish interiors and flexible layouts to cater to your event's needs, ensuring a sophisticated and enjoyable experience for all your guests.",
        },
        {
            id: 'grant-hall',
            image: hall3,
            title: "Grant Hall",
            description: "Grant Hall provides an expansive 5000 sq. ft. space that is ideal for large events including elaborate wedding receptions and birthday parties. The hall's sophisticated design and ample room allow for customized setups, from elegant dining arrangements to expansive dance floors. Let us help you create an unforgettable celebration in this majestic venue.",
        },
        {
            id: 'richie-hall',
            image: hall4,
            title: "Richie Hall",
            description: "Richie Hall is the epitome of grandeur with its 6000 sq. ft. area, making it an excellent choice for hosting high-profile events such as weddings and large corporate functions. Its luxurious ambiance, combined with versatile space options, provides the perfect setting for any major celebration. Our professional staff is here to ensure every detail is handled with care.",
        },
        {
            id: 'pheonix-hall',
            image: hall5,
            title: "Pheonix Hall",
            description: "Pheonix Hall offers a spacious 3500 sq. ft. area, making it ideal for family-friendly gatherings such as birthday parties and anniversaries. With its inviting atmosphere and flexible layout, this hall can accommodate various event sizes and styles, ensuring a comfortable and memorable experience for you and your guests.",
        },
        {
            id: 'emirate-hall',
            image: hall6,
            title: "Emirate Hall",
            description: "Emirate Hall boasts an impressive 7000 sq. ft. space, perfect for hosting grand events like weddings and large-scale celebrations. The hall features luxurious decor and ample space for elaborate setups, including stage arrangements, dining areas, and dance floors. Our dedicated team will work with you to bring your vision to life and ensure a spectacular event.",
        }
    ];

    // Using a ref to hold the observer to avoid re-initializing it on every render
    const observerRef = useRef(null);

    useEffect(() => {
        // Create an Intersection Observer to detect when elements come into view
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('pop-out');
                    observerRef.current.unobserve(entry.target); // Stop observing after animation
                }
            });
        });

        // Observe each room card
        document.querySelectorAll('.room-card').forEach(card => {
            observerRef.current.observe(card);
        });

        // Cleanup observer on component unmount
        return () => observerRef.current.disconnect();
    }, []);

    return (
        <div
            className="homepage-container"
            style={{ backgroundImage: `url(${BackgroundImage3})` }}
        >
            <div className="rooms-section">
                {rooms.map((room, index) => (
                    <div
                        className="room-card"
                        key={index}
                    >
                        <img src={room.image} alt={room.title} className="room-image" />
                        <h2 className="room-title">{room.title}</h2>
                        <p className="room-description">{room.description}</p>
                        <Link to={`/booking/${room.id}`} className="more-info-button">Book</Link> {/* Link updated to include room.id */}
                    </div>
                ))}
            </div>
        </div>
    );
}
