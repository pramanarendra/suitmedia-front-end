import React from 'react'
import './Values.css'
import InnovativeIcon from '../assets/lightbulb-o.png'
import LoyaltyIcon from '../assets/bank.png'
import RespectIcon from '../assets/balance-scale.png'

const Values = () => {
    return (
        <div className="values-container">
            <h2 className='values-title'>Our Values</h2>
            <div className="values-cards">
                <div className="card">
                    <img src={InnovativeIcon} alt="card-icon" className="card-icon" />
                    <p className="card-title">Innovative</p>
                    <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime exercitationem dolorem deserunt, unde, eaque ipsa?</p>
                </div>

                <div className="card">
                    <img src={LoyaltyIcon} alt="card-icon" className="card-icon" />
                    <p className="card-title">Loyalty</p>
                    <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit similique eum itaque facere temporibus dolores.</p>
                </div>

                <div className="card">
                    <img src={RespectIcon} alt="card-icon" className="card-icon" />
                    <p className="card-title">Respect</p>
                    <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, sit? Tenetur et neque quod incidunt!</p>
                </div>
            </div>
        </div>
    )
}

export default Values