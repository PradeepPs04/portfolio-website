import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [loading, setLoading] = useState(false);
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const changeHandler = ({target: {name, value} }) => {
        setForm((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await emailjs.send('service_7211ngf', 'template_6mzkj0s', 
                {
                    from_name: form.name, 
                    to_name: 'Pradeep', 
                    from_email: form.email, 
                    to_email: 'pradeep.ps2004@gmail.com', 
                    message: form.message
                }, 
                'Meo_-8VjJRTSocLyI'
            );
            setLoading(false);
            toast.success('Your message has been sent ♥♥♥');

            setForm({
                name: '',
                email: '',
                message: ''
            });
        }
        catch(err) {
            setLoading(false);
            toast.error('Something went wrong!');
            console.log(err);
        }
    }

  return (
    <div className='c-space my-20' id='contact'>

    <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen'/>
        <div className='contact-container'>
            <h3 className='head-text mt-10'>Let's talk</h3>
            <p className='text-lg text-white-600 mt-3'>
                If you'd like to connect, please feel free to reach out!

                <form ref={formRef} onSubmit={submitHandler} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                        <input type='text'
                            name='name'
                            value={form.name}
                            required
                            onChange={changeHandler}
                            className='field-input'
                            placeholder='John Doe'
                        />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input type='email'
                            name='email'
                            value={form.email}
                            required
                            onChange={changeHandler}
                            className='field-input'
                            placeholder='johndoe.jd@gmail.com'
                        />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Your Message</span>
                        <textarea
                            name='message'
                            value={form.message}
                            onChange={changeHandler}
                            required
                            rows={5}

                            className='field-input'
                            placeholder="Hi, I wanna give you a job..."
                        />
                    </label>

                    <button className='field-btn'  type='submit' disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
                    </button>
                </form>
            </p>
        </div>
    </div>

    </div>
  )
}

export default Contact