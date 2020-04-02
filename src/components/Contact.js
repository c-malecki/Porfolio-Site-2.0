import React, { Component } from 'react';
import './styles/Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className='content'>
                <div className='contact-background'>
                    <div className='contact-content'>
                        <div className='contact-column'>
                            <div className='contact-heading'>
                                <h2>Reach out if you have a question or want to work together!</h2>
                            </div>

                            <div className='contact-list'>
                                <i className="far fa-envelope" aria-hidden='true'/>
                                <span>chrismmalecki@gmail.com</span>
                            </div>

                            <div className='contact-social'>
                                <a href='https://www.linkedin.com/in/christopher-malecki/' target='_blank' rel="noopener noreferrer">
                                    <i className='fab fa-linkedin' aria-hidden='true' />
                                </a>
                                <a href='https://github.com/c-malecki' target='_blank' rel="noopener noreferrer">
                                    <i className='fab fa-github-square' aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact
