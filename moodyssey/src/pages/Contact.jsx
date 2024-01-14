import React from 'react'

function Contact() {
  return (
    <>
        <div>
            <h3>Contact Us</h3>
            <div className='flex space-x-5'>
                <div>icon</div>
                <div>
                    <p>
                        PUP College of Engineering
                        3F CEA Building, NDC Campus
                        Anonas cor. Pureza Sts.
                        Sta. Mesa, Manila, Philippines
                    </p>
                </div>
            </div>
            <div className='flex space-x-5'>
                <div>icon</div>
                <div>
                    <p>cpemoodyssey@gmail.com</p>
                </div>
            </div>
        </div>
        <div>
            <h3>I'd love to hear from you!</h3>
            <h4>We're open to whispers and shouts alike, so comment away.</h4>
            <div>
                <form className='space-y-4'>
                    <div>
                        <input
                            className='bg-red-100'
                            id='name'
                            name='name'
                            placeholder='Name'
                            type='text'
                        />
                    </div>
                    <div>
                        <input
                            className='bg-red-100'
                            id='email'
                            name='email'
                            placeholder='Email'
                            type='email'
                        />
                    </div>
                    <div>
                        <textarea
                            className='bg-red-100'
                            id='message'
                            name='message'
                            placeholder='Message'
                            rows='5'
                        ></textarea>
                    </div>
                    <div>
                        <button className='bg-red-300'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact