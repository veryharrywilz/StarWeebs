import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs () {
    
            const form = useRef();

    function sendEmail(e) {
        e.preventDefault()


        emailjs.sendForm('service_x6mmq1h', 'template_31wc0nz', e.target, 'si379M2QozQrfvVcg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }



    return(
        <div 
        ref={form} 
        >
            <br/>
            <h1 className="pageHeader">Contact the Star Weebs Hosts!</h1>
            <p>Have an idea you'd like to submit for the show? 
            <br />
            <br />
                A question you'd like answered? 
                <br />
                <br />
                Let us know your thoughts with the form below!</p>
            <br />
            <form 
            onSubmit={sendEmail}
            className="contactForm"
            >
                <label>Name: </label>
                <input type="text" name="user_name" />
                <br />
                <br />
                <label>Subject: </label>
                <input type="text" name="subject" />
                <br />
                <br />
                <label>Email: </label>
                <input type="email" name="user_email" />
                <br />
                <br />
                <label>Message: </label>
                <textarea name="message" />
                <br />
                <br />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default ContactUs;