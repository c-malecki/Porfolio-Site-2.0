import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import PoD from './../images/PoD.png';
import FTA from './../images/FinancialTrackerApp.png'
import './styles/Projects.css'

class Projects extends Component {
    render() {
        return (
            <div className='content'> 
                <div className='projects-background'>
                    <div className='projects-content'>
                        <div className='projects-row'>
                            <ProjectCard 
                                pic={PoD}
                                title='PoD Character Calculator'
                                titleId={1}
                                description={`Work in progress - Complex calculator built with MERN stack that recreates Path of Diablo's game logic and assets.` }
                                descriptionId={1}
                                github='https://github.com/c-malecki/PodCharCalculator'
                                demo='https://upbeat-fermat-730cf7.netlify.com/'
                            />
                            <ProjectCard 
                                pic={FTA}
                                title='Financial Tracker App'
                                titleId={2}
                                description='Work in progress - Personal finance tracker similar to banking app. Uses React, React-Router, Redux, Formik, Yup, Bootstrap.'
                                descriptionId={2}
                                github='https://github.com/c-malecki/FinancialTrackerApp'
                                demo='https://codesandbox.io/s/github/c-malecki/FinancialTrackerApp'
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects
