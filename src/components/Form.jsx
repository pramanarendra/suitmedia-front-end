import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className="form-container">
            <form action="">
                <h2 className='form-title'>Contact Us</h2>

                <label htmlFor="name">Name</label>
                <input type="text" id='name' required />

                <label htmlFor="email">Email</label>
                <input type="email" id='email' required />

                <label htmlFor="message">Message</label>
                <textarea id="message" required cols="30" rows="10"></textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form