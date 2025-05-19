//  service_ab1oazw
//  template_ssedxun
//  djf0SWMBJFf4awTiw  --public key

import React, { useRef } from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setloading] = useState(false)

    const [form, setform] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target : {name,value}}) => {
        setform({...form,[name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);

        try{
            await emailjs.send('service_ab1oazw',
                'template_ssedxun',
                {
                from_name: form.name,
                to_name: 'Tejas',
                from_email: form.email,
                to_email: 'rajtejas.xyz@gmail.com',
                message: form.message
            }, 
            'djf0SWMBJFf4awTiw'
        )

            setloading(false);
            alert('Your message has been sent ! ');

            setForm({
                name:'',
                email:'',
                message:''
            });

        } catch(error){
            setloading(false);
            console.log(error);
            alert('Something went wrong  !!!');
        }

    }


  return (
    <section className='c-space my-20'>
        <div className='relative min-h-screen flex item-center justify-center flex-col'>
            <img src="assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
            <div className='contact-container'>
                <h3 className='head-text'>Contact Me</h3>
                <p className='text-lg text-white-600 mt-3'>
                    Whether you're looking to build a new website ,improve your existing platform
                    ,or bring a unique project to life , I'm here to help.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required 
                            className='field-input'
                            placeholder='Tejas Raj'
                        />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required 
                            className='field-input'
                            placeholder='tejasraj@gmail.com'
                        />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Your Message</span>
                        <textarea   
                            name="message" 
                            value={form.message}
                            onChange={handleChange}
                            required 
                            rows={5}
                            className='field-input'
                            placeholder="Hi, I'm intrested in ......"
                        />
                    </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending' : 'Send'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
                        </button>
                   
                </form>

            </div>
        </div>
    </section>
  )
}

export default Contact