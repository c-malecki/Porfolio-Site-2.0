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
                                description={`Calculator designed to mimic Path of Diablo's UI. Also reconstructs game's logic for formulas.` }
                                descriptionId={1}
                                github='https://github.com/c-malecki/PodCharCalculator'
                                codesandbox='https://codesandbox.io/s/github/c-malecki/PoDCharCalculator'
                            />
                            <ProjectCard 
                                pic={FTA}
                                title='Financial Tracker App'
                                titleId={2}
                                description='Personal finance tracker similar to banking app. Uses React, React-Router, Redux, Formik, Yup, Bootstrap.'
                                descriptionId={2}
                                github='https://github.com/c-malecki/FinancialTrackerApp'
                                codesandbox='https://codesandbox.io/s/github/c-malecki/FinancialTrackerApp'
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects
