import React from 'react'

const CarouselIndicator = ({ banners, currentIndex, switchIndex }) => {
    return (
        <div className="carousel-indicators">
            {banners.map((_, index) => (
                <button
                    className={`carousel-indicator-item${currentIndex === index ? ' active' : ''}`}
                    onClick={() => switchIndex(index)}
                ></button>
            ))}
        </div>
    )
}

export default CarouselIndicator