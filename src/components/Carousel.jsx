import React from 'react'
import { useState } from 'react'
import CarouselItem from './CarouselItem'
import CarouselToggle from './CarouselToggle'
import './Carousel.css'
import Banner1 from '../assets/bg.jpg'
import Banner2 from '../assets/about-bg.jpg'

const Carousel = () => {
    // isi data carousel
    const banners = [
        {
            img: Banner1,
            desc: "this is a place where technology & creativity fused into digital chemistry"
        },
        {
            img: Banner2,
            desc: "we don't have the best but we have the greatest team"
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const prev = () => {
        const index = currentSlide > 0 ? currentSlide - 1 : banners.length - 1;
        setCurrentSlide(index);
    }

    const next = () => {
        const index = currentSlide < banners.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    }

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
                {banners.map((banner, index) => {
                    return (
                        <CarouselItem key={index} img={banner.img} desc={banner.desc} />
                    )
                })}
            </div>
            <CarouselToggle prev={prev} next={next} />
        </div>
    )
}

export default Carousel