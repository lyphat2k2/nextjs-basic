import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function EventCard({ events: { id, image, title, description } }) {
    const inputEmail = useRef();
    const router = useRouter();
    const [messages, setMessages] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value
        const eventId = router.query.slug

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailValue.match(validRegex)) {
            setMessages('Please introduce a correct email address!')
            return;
        }

        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emailValue, eventId })
            })
            if (!response.ok) throw new Error(`Error::${response.status}`)
            const { message } = await response.json()
            setMessages(message)
        } catch (err) {
            console.log('Error::', err)
        }
    };
    
    return (
        <div className="event_single_page">
            <h1>{title}</h1>
            <Image
                src={image}
                alt={id}
                width={1000}
                height={500}
            />
            <p>{description}</p>
            <form
                onSubmit={onSubmit}
                className="email_registration">
                <label htmlFor="email">
                    Get info to register for this Event!
                </label>
                <input
                    ref={inputEmail}
                    type="email"
                    id="email"
                    placeholder="Please insert your email here"
                />
                <button>Submit</button>
            </form>
            <span className="message">{messages}</span>
        </div>
    );
}

export default EventCard;
