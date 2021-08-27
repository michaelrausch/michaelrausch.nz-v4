import axios from "axios";
import React, { FormEvent } from "react"
import { useState } from "react";

const ContactForm: React.FC = () => {
    let API_URL = "https://contact-v2.byronbay.rausch.id.au/";
    let DEST =  "michael"

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')

    let [error, setError] = useState('');
    let [successMessage, setSuccessMessage] = useState('');
    let [formProcessing, setFormProcessing] = useState(false);

    let onSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        setFormProcessing(true);
        setError('');
        setSuccessMessage('');

        const hadError = (message) => {
            setFormProcessing(false);
            setError(message);
            setSuccessMessage('');
        }

        const hadSuccess =() => {
            setFormProcessing(false);
            setSuccessMessage('Thanks, ' + name.split(' ')[0] + ', I\'ll get back to you as soon as possible.');
            setError('')
        }

        if (name === '') { return hadError('You must enter your name') };
        if (email === '') { return hadError('You must enter your email') };
        if (message === '') { return hadError('You must enter a message') };

        let errorMessage = 'Sorry, ' + name.split(' ')[0] + ', I wasn\'t able to send your message. Please email me at michael@rausch.nz instead.'

        axios.post(API_URL, {
            "Name": name,
            "Email": email,
            "Message": message,
            "Destination": DEST     
        })
        .then(result => {
            if (result.status !== 200) {
                return hadError(errorMessage);
            }
            hadSuccess();
        })
        .catch(err => {
            return hadError(errorMessage);
        })
    }

    return (
        <form className="flex-1" onSubmit={onSubmit}>

            { error !== '' &&
                <div className="bg-red-500 mb-10 rounded-sm text-white py-4 px-6 font-futura-pt-bold shadow-offset-black">{error}</div>
            }

            { successMessage !== '' &&
                <div className="bg-green-500 mb-10 rounded-sm text-white py-4 px-6 font-futura-pt-bold shadow-offset-black">{successMessage}</div>
            }

            <div className="pb-5">
                <label className="text-white text-xl font-futura-pt font-semibold">Name</label>
                <input 
                    type="text" 
                    className="bg-gray-700 rounded-sm block  text-white w-full border-none text-xl py-3 mt-2 shadow-xl " 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    ></input>
            </div>

            <div className="pb-5">
                <label className="text-white text-xl font-futura-pt font-semibold">Email</label>
                <input type="email" 
                    className="bg-gray-700 rounded-sm block text-white w-full border-none text-xl py-3 mt-2 " 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    ></input>
            </div>

            <div className="pb-5">
                <label className="text-white text-xl font-futura-pt font-semibold">Message</label>
                <textarea 
                    className="bg-gray-700 rounded-sm block text-white w-full border-none mt-2 h-32" 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    ></textarea>
            </div>

            <button 
                className="py-3 px-8 bg-green-500 font-futura-pt-bold text-xl rounded-sm text-white w-full md:w-auto disabled:opacity-50 shadow-offset-black"
                disabled={formProcessing}>
                    {formProcessing ? 'Sending' : 'Send'}
                </button>
        </form>
    )
}

export default ContactForm;