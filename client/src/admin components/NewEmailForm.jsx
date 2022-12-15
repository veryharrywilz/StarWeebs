import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function NewEmailForm() {
    // const form = useRef();

    // function sendEmail(e) {
    //     e.preventDefault()


    //     emailjs.sendForm('service_x6mmq1h', 'template_31wc0nz', e.target, 'si379M2QozQrfvVcg')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });


    // }

    function sendMassEmail (e) {
        e.preventDefault()
        fetch(`/sendit`, {
            method: 'POST',
            headers: { "content-type" : "application/json"},
            body: JSON.stringify({
                message: e.target.message.value,
                subject: e.target.subject.value
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }


    return (
        <div 
        // ref={form} 
        >
            <form onSubmit={sendMassEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <br />
                <label>Subject</label>
                <input type="text" name="subject" />
                <br />
                <label>Email</label>
                <input type="email" name="user_email" />
                <br />
                <label>Message</label>
                <textarea name="message" />
                <br />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default NewEmailForm;