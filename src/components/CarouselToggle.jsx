import React from 'react'
import ChevronLeft from '../assets/chevron-left.svg'
import ChevronRight from '../assets/chevron-right.svg'


const CarouselToggle = ({ prev, next }) => {
    return (
        <div className='carousel-toggle-container'>
            <img src={ChevronLeft} className="carousel-toggle left" alt="chevron left" onClick={prev} />
            <img src={ChevronRight} className="carousel-toggle right" alt="chevron right" onClick={next} />
        </div>
    )
}

export default CarouselToggle