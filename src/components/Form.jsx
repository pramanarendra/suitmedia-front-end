import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [invalid, setInvalid] = useState({
        name: false,
        email: false,
        message: false
    })

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.name === "" && values.email === "" && values.message === "") {
            setInvalid({ name: true, email: true, message: true })
        } else if (invalid.name === false && invalid.email === false && invalid.message === false) {
            window.location.reload(false);
        }
    }

    const onChange = (e) => {
        e.target.value !== "" ? setInvalid({ ...invalid, [e.target.name]: false }) : setInvalid({ ...invalid, [e.target.name]: true })
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onChangeEmail = (e) => {
        if (!isValidEmail(e.target.value) || e.target.value === "") {
            setInvalid({ ...invalid, [e.target.name]: true })
        } else {
            setInvalid({ ...invalid, [e.target.name]: false })
        }
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2 className='form-title'>Contact Us</h2>

                <label htmlFor="name">Name</label>
                <input className={invalid.name ? "invalid" : ""} type="text" id='name' name='name' value={values["name"]} onChange={onChange} />
                {
                    invalid.name &&
                    <span className='error-message'>This field is required.</span>
                }

                <label htmlFor="email">Email</label>
                <input className={invalid.email ? "invalid" : ""} type="email" id='email' name='email' value={values["email"]} onChange={onChangeEmail} />
                {
                    invalid.email &&
                    <span className='error-message'>Invalid email address.</span>
                }

                <label htmlFor="message">Message</label>
                <textarea className={invalid.message ? "invalid" : ""} id="message" name='message' value={values["message"]} onChange={onChange} cols="30" rows="5"></textarea>
                {
                    invalid.message &&
                    <span className='error-message'>This field is required.</span>
                }

                <button className='submit-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form