import React, { Component } from 'react';
import './styles/AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div className='content'>
                <div className='about-background'>
                    <div className='about-content'>
                        <div className='about-row'>
                            <div className='portrait'></div>
                            <div className='blurb'>
                                I am a web developer with focus on the MERN stack. <br/>
                                I combine creative design with practical UI to produce a unique and intuitive user experience.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe
