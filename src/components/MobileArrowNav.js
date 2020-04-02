import React, { Component } from 'react';

class MobileArrowNav extends Component {
    handleArrowRight() {
        this.props.arrowRight();
    }
    handleArrowLeft() {
        this.props.arrowLeft();
    }
    pageTitle() {
        const { pageId } = this.props;
        if (pageId === 0) {
            return (
                <span>Home</span>
            )
        } else if (pageId === 1) {
            return (
                <span>About</span>
            )
        } else if (pageId === 2) {
            return (
                <span>Projects</span>
            )
        } else if (pageId === 3) {
            return (
                <span>Contact</span>
            )
        }
    }
    render() {
        const { pageId } = this.props;
        return (
            <div className='mobile-arrow-nav'>
                <div className='arrow-nav-container'>
                    <button 
                        className={pageId === 0 ? 'arrow-nav-button end' : 'arrow-nav-button'}
                        id='left-button'
                        onClick={() => this.handleArrowLeft()}
                    >
                        {pageId === 0 ? 'X' : '<'}
                    </button>
                    <div className='arrow-nav-page'>
                        {this.pageTitle()}
                    </div>
                    <button
                        className={pageId === 3 ? 'arrow-nav-button end' : 'arrow-nav-button'}
                        id='right-button'
                        onClick={() => this.handleArrowRight()}
                    >
                        {pageId === 3 ? 'X' : '>'}
                    </button >
                </div>
            </div>
        );
    }
}

export default MobileArrowNav