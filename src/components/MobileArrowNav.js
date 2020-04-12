import React, { Component } from 'react';
import MobileNavigation from './MobileNavigation';

class MobileArrowNav extends Component {
    constructor(props) {
        super(props);
        this.handleChangePage = this.handleChangePage.bind(this);
    }
    handleArrowRight() {
        this.props.arrowRight();
    }
    handleArrowLeft() {
        this.props.arrowLeft();
    }
    handleChangePage(id) {
        this.props.changePage(id)
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
                        <MobileNavigation
                            pageId={this.props.pageId}
                            changePage={this.handleChangePage}
                        />
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