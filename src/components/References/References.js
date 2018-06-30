import React, { Component } from 'react';
import { httpRequest } from '../utils/httpRequest';

class References extends Component {
    constructor(props) {
        super(props);

        let referencePerPage = 2;
        // check window width for reference per page        
        if (window.innerWidth < 576) {
            referencePerPage = 1;
        }
        this.state = {
            referenceLoaded: false,
            referenceData: {},
            referencesCount: 0,
            page: 1,
            referencePerPage,
            totalPages: 0
        }

        // get reference json
        httpRequest('/js/references.json', this.renderReferences);

        this.resized;
        this.initResize();
    }

    initResize = () => {
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    handleResize = () => {
        if (!this.resized) {
            this.resized = setTimeout(() => {
                this.resized = null;
                this.onResize();
            }, 500);
        };
    }

    onResize = () => {
        // resize event to determine how many references to display
        const { referencePerPage } = this.state;
        if (window.innerWidth < 576) {
            if (referencePerPage !== 1) {
                this.setState({
                    referencePerPage: 1
                });
            }
        } else {
            if (referencePerPage !== 2) {
                this.setState({
                    referencePerPage: 2
                });
            }
        }
    }

    renderReferences = (referenceJson) => {
        const references = JSON.parse(referenceJson);

        this.setState({
            referenceLoaded: true,// pass loaded test
            referenceData: references.peerReferences, // reference data
            referencesCount: references.peerReferences.length,// count of references
            totalPages: Math.ceil((references.peerReferences.length / this.state.referencePerPage))// pages to page through
        });
    }

    onPageLeft = () => {
        let { page } = this.state;

        // allow page left if not on first page
        if (page > 1) {
            this.setState({
                page: page - 1
            });
        }
    }

    onPageRight = () => {
        let { page, referencesCount, referencePerPage, totalPages } = this.state;
        // allow page right if not on last page
        if (page < totalPages) {
            this.setState({
                page: page + 1
            });
        }
    }

    getLeftArrow = () => {
        // left arrow svg
        return (
            <svg viewBox="0 0 320 512"><path fill="#FFFFFF" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" /></svg>
        );
    }

    getRightArrow = () => {
        // right arrow svg
        return (
            <svg viewBox="0 0 320 512"><path fill="#FFFFFF" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
        );
    }

    getLeftArrowClass = () => {
        const {
            page
        } = this.state;
        const defaultClass = 'reference-pager reference-page-left';
        // sets left arrow class and append disable if on first page
        return page === 1 ? `${defaultClass} disable` : defaultClass;
    }

    getRightArrowClass = () => {
        const defaultClass = 'reference-pager reference-page-right';
        const {
            page,
            totalPages
        } = this.state;
        // sets right arrow class and append disable if on last page
        return page === totalPages ? `${defaultClass} disable` : defaultClass;
    }

    render() {
        const {
            referenceLoaded,
            referenceData,
            referencePerPage,
            page
        } = this.state;

        // ensure json is loaded
        if (!referenceLoaded) {
            return null;
        }
        // lazy load hack
        const startIndex = (page - 1) * referencePerPage;
        const endIndex = startIndex + referencePerPage;
        const referenceToLoad = referenceData.slice(startIndex, endIndex);

        return (
            <div className='references-container'>
                <div className={this.getLeftArrowClass()} onClick={this.onPageLeft}>
                    {this.getLeftArrow()}
                </div>
                <div className='references-wrapper'>
                    {
                        referenceToLoad.map((reference, key) => {
                            return (
                                <div className='reference-item clear' key={key}>

                                    {/* reference image*/}
                                    <div className='reference-img-wrapper'>
                                        <img className='reference-image' src={reference.Image} alt='Reference Head Shot' />
                                    </div>
                                    <div className='reference-info'>
                                        <div className='reference-info-padder'>
                                            {/* reference name*/}
                                            <div className='reference-name'>
                                                {reference.Name}
                                            </div>
                                            {/* reference position*/}
                                            <div className='reference-position'>
                                                {reference.Position}
                                            </div>
                                            {/* reference recommendation*/}
                                            <div className='reference-rec'>
                                                {reference.Recommendation}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={this.getRightArrowClass()} onClick={this.onPageRight}>
                    {this.getRightArrow()}
                </div>
            </div>
        )
    }
}

export default References;