import React, { Component } from 'react';
import './styles/ProjectCard.css';

class ProjectCard extends Component {
    render() {
        const { title, description, github, demo, pic, titleId, descriptionId } = this.props
        return (
            <div className='project-card-container'>
                    <div className='card-image'>
                        <img src={pic} alt=''/>
                    </div>
                    <div className='card-title' id={`title-id-${titleId}`}>
                        <div className='title-background'>{title}</div>
                    </div>
                    <div className='card-description' id={`description-id-${descriptionId}`}>
                        <div className='description-background'>{description}</div>
                    </div>
                    <div className='card-links'>
                        <a href={github} target='_blank' rel="noopener noreferrer">GitHub</a>
                        <a href={demo} target='_blank' rel="noopener noreferrer">Demo</a>
                    </div>
            </div>
        );
    }
}

export default ProjectCard