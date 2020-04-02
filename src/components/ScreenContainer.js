import React, { Component } from 'react';
import './styles/ScreenContainer.css';

import MainNavigation from './MainNavigation';
import MobileNavigation from './MobileNavigation';
import MobileArrowNav from './MobileArrowNav';
import LandingBanner from './LandingBanner';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import { withRouter } from 'react-router-dom';

class ScreenContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPage: 0
        }
        this.changePage = this.changePage.bind(this);
        this.arrowLeft = this.arrowLeft.bind(this);
        this.arrowRight = this.arrowRight.bind(this);
    }
    changePage(id) {
        this.setState({
            displayPage: id
        })
    }
    arrowRight() {
        let pageId = this.state.displayPage;
        const history = this.props.history;
        if (pageId === 0) {
            history.push('/about')
        } else if (pageId === 1) {
            history.push('/projects')
        } else if (pageId === 2) {
            history.push('/contact')
        }
        this.setState({
            displayPage: pageId < 3 ? ++pageId : pageId
        })
    }
    arrowLeft() {
        let pageId = this.state.displayPage;
        const history = this.props.history;
        if (pageId === 3) {
            history.push('/projects')
        } else if (pageId === 2) {
            history.push('/about')
        } else if (pageId === 1) {
            history.push('/home')
        }
        this.setState({
            displayPage: pageId > 0 ? --pageId : pageId
        })
    }
    displayPage() {
        const { displayPage } = this.state;
        if (displayPage === 0) {
            return (
                <LandingBanner />
            )
        } else if (displayPage === 1) {
            return (
                <AboutMe />
            )
        } else if (displayPage === 2) {
            return (
                <Projects />
            )
        } else if (displayPage === 3) {
            return (
                <Contact />
            )
        } 
    }
    render() {
        return (
            <div className='overflow-frame'>
                <div className='screen-frame'>
                    {this.displayPage()}
                    <MainNavigation 
                        changePage={this.changePage}
                    />
                    <MobileNavigation 
                        changePage={this.changePage}
                    />
                    <MobileArrowNav 
                        arrowRight={this.arrowRight}
                        arrowLeft={this.arrowLeft}
                        pageId={this.state.displayPage}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(ScreenContainer)