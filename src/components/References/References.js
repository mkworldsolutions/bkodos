import React, { Component } from 'react';

class References extends Component {
    constructor(props) {
        super(props);
        const referencePerPage = 2;// FIX ME - find page width to determine how many to show per page
        this.state = {
            referenceLoaded: false,
            referenceData: {},
            referencesCount: 0,
            page: 1,
            referencePerPage
        }

        const xReq = new XMLHttpRequest();
        xReq.open("GET", "/js/references.json", true);
        xReq.onload = () => {
            if (xReq.readyState === 4) {
                if (xReq.status === 200) {
                    this.renderReferences(xReq.responseText);
                } else {
                    console.log('status text: ', xReq.statusText);
                }
            }
        };
        xReq.onerror = () => {
            console.log('error loading references: ', xReq.statusText);
        }
        xReq.send(null);

    }

    renderReferences = (referenceJson) => {
        const references = JSON.parse(referenceJson);
        const referenceData = references.peerReferences;
        const referencesCount = referenceData.length

        this.setState({
            referenceLoaded: true,
            referenceData,
            referencesCount
        });
    }

    onPageLeft = () => {
        let { page } = this.state;

        if (page > 1) {
            this.setState({
                page: page - 1
            });
        }
        console.log('page left');
    }

    onPageRight = () => {
        let { page, referencesCount, referencePerPage } = this.state;
        const totalPages = referencesCount / referencePerPage;
        if (page < totalPages) {
            this.setState({
                page: page + 1
            });
        }
        console.log('page right');
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
                <div className='references-wrapper clear'>
                    <div className='reference-page-left' onClick={this.onPageLeft}>
                        <svg viewBox="0 0 320 512"><path fill="#FFFFFF" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" /></svg>
                    </div>
                    {
                        referenceToLoad.map((reference, key) => {
                            return (
                                <div className='reference-item clear' key={key}>
                                    <div class='reference-item-padder'>
                                        {/* reference image*/}
                                        <div className='reference-img'>
                                            <img alt='reference-image' src={reference.Image} />
                                        </div>
                                        <div className='reference-info'>
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
                    <div className='reference-page-right' onClick={this.onPageRight}>
                        <svg viewBox="0 0 320 512"><path fill="#FFFFFF" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
                    </div>
                </div>
            </div>
        )
    }
}

export default References;