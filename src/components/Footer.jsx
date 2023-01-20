import React from 'react'
import './Footer.css'
import TwitterIcon from '../assets/twitter.png'
import FacebookIcon from '../assets/facebook-official.png'

const Footer = () => {
    return (
        <div className="footer">
            <p className='copyright'>Copyright © 2016. PT Company</p>
            <div className="social-media">
                <img src={FacebookIcon} alt="facebook icon" />
                <img src={TwitterIcon} alt="twitter icon" />
            </div>
        </div>
    )
}

export default Footer