import React, { Component } from 'react';

class CaseStudies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            caseLoaded: false,
            caseStudyData: []
        };
        // get case json
        const xReq = new XMLHttpRequest();
        xReq.open("GET", "/js/caseStudies.json", true);
        xReq.onload = () => {
            if (xReq.readyState === 4) {
                if (xReq.status === 200) {
                    this.renderCaseStudies(xReq.responseText);
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

    renderCaseStudies = (caseJson) => {
        const caseStudies = JSON.parse(caseJson);
        this.setState({
            caseLoaded: true,
            caseStudyData: caseStudies.cases
        });
    }

    getDotSvg = () => {
        return (
            <svg viewBox="0 0 512 512"><path fill='#0d75c1' d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>
        );
    }

    render() {
        const {
            caseLoaded,
            caseStudyData
        } = this.state;

        if (!caseLoaded) {
            return null;
        }

        return (
            <div className='case-study-container'>
                {
                    caseStudyData.map((parentCase, key) => {
                        return (
                            <div className='case-study-wrapper' key={key}>
                                <div className='case-study-header'>
                                    <div className='case-study-title'>{parentCase.Title}</div>
                                    <div className='case-study-title-underline' ></div>
                                </div>
                                <div className='case-study-item-wrapper clear'>
                                    {
                                        parentCase.Content.map((caseStudy, key) => {
                                            return (
                                                <div className='case-study-item' key={key}>

                                                    <div className='case-study-image-wrapper'>
                                                        <a href={caseStudy.Url} className='case-study-link'>
                                                            <img className='case-study-img' src={caseStudy.Image} alt={caseStudy.Name} />
                                                        </a>
                                                    </div>
                                                    <div className='case-study-tagline clear'>
                                                        <span className='case-study-name'>{caseStudy.Name}</span>
                                                        <i className='case-study-tag-break'>{this.getDotSvg()}</i>
                                                        <span className='case-study-type'>{caseStudy.Type}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CaseStudies;