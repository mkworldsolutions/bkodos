import React, { Component } from 'react';
import { httpRequest } from '../utils/httpRequest';

import CaseStudyItem from './CaseStudyItem';

class CaseStudies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            caseLoaded: false,
            caseStudyData: []
        };
    }

    componentDidMount() {
        // get case json
        httpRequest('/js/caseStudies.json', this.renderCaseStudies);
    }

    renderCaseStudies = (caseJson) => {
        const caseStudies = JSON.parse(caseJson);
        this.setState({
            caseLoaded: true,
            caseStudyData: caseStudies.cases
        });
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
                                                <CaseStudyItem caseStudy={caseStudy} key={key} />
                                            );
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