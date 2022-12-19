import React from 'react';


function NewEmailForm() {


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

                <label>Subject</label>
                <input type="text" name="subject" />
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