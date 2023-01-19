import React from 'react'
import './Carousel.css'

const CarouselItem = ({ img, desc }) => {
    return (
        <div className="carousel-item">
            <img src={img} alt="banner image" />
            <p className='carousel-desc'>{desc}</p>
        </div>
    )
}

export default CarouselItem