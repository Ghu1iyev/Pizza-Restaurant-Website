import React from 'react'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div className="contact">
        <div className="leftSide"></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form action="" id="contact-form" method='post'>
                <label htmlFor="name">Full Name</label>
                <input type="text"  name='name' placeholder='Enter full name...'/>
                <label htmlFor="email">Email</label>
                <input name='email' type="email" placeholder='Enter email...'/>
                <label htmlFor="message">Email</label>
                <textarea name="message" placeholder='Enter message...' required rows="6"></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact