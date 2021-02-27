//Import React
import React from 'react';

//Import EmailJS
import emailjs from 'emailjs-com';

//Import Images
import BackToTopBtn from '../../images/backTop.png';

//Import Style
import './Contact.css';

//Export Component
export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('portfolioGmail', 'portfolioEmail', e.target, 'user_VttEfYpVuBFzBQhK09XTJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <div className="contactDiv" id="Contact">
            <div className="contactTitleDiv">
                <div />
                <h2 className="contactTitle">Contact</h2>
                {/*
                    Animation to go to the top, is on the Projects.css file.
                */}
                <a href="#" className="backTopLink"><img src={BackToTopBtn} alt="backTop" className="backTopBtn" /></a>
            </div>
            <div className="contactFormDiv">
                <form className="contactForm" onSubmit={sendEmail}>
                    <span className="subtitleContact">Subject:</span>
                    <input type="text" className="input" placeholder="Enter the subject..." required name="subject" autoComplete="off" />
                    <span className="subtitleContact">Name:</span>
                    <input type="text" className="input" placeholder="Enter your name..." required name="from_name" autoComplete="off" />
                    <span className="subtitleContact">Email:</span>
                    <input type="email" className="input" placeholder="Enter your email..." required name="from_mail" autoComplete="off" />
                    <span className="subtitleContact">Message:</span>
                    <textarea className="input textInput" placeholder="Write a message..." required name="message" />
                    <input type="submit" className="submitBtn" value="Send" />
                </form>
            </div>
        </div>
    )
}
