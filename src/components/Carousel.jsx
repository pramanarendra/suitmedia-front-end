import React from 'react'
import { useState } from 'react'
import CarouselItem from './CarouselItem'
import CarouselToggle from './CarouselToggle'
import './Carousel.css'
import Banner1 from '../assets/bg.jpg'
import Banner2 from '../assets/about-bg.jpg'
import CarouselIndicator from './CarouselIndicator'

const Carousel = () => {
    // data carousel bisa ditambah di objek berikut
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

    const [currentBanner, setcurrentBanner] = useState(0)

    const prev = () => {
        const index = currentBanner > 0 ? currentBanner - 1 : banners.length - 1;
        setcurrentBanner(index);
    }

    const next = () => {
        const index = currentBanner < banners.length - 1 ? currentBanner + 1 : 0;
        setcurrentBanner(index);
    }

    const switchIndex = (index) => {
        setcurrentBanner(index)
    }

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(${-currentBanner * 100}%)` }}>
                {banners.map((banner, index) => {
                    return (
                        <CarouselItem key={index} img={banner.img} desc={banner.desc} />
                    )
                })}
            </div>
            <CarouselIndicator banners={banners} currentIndex={currentBanner} switchIndex={switchIndex} />
            <CarouselToggle prev={prev} next={next} />
        </div>
    )
}

export default Carousel