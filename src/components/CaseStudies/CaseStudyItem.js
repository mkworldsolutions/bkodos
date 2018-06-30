import React from 'react';

const CaseStudyItem = ({
    caseStudy
}) => {

    const getDotSvg = () => {
        return (
            <svg viewBox="0 0 512 512"><path fill='#0d75c1' d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>
        );
    }

    return (
        <div className='case-study-item'>
            <div className='case-study-image-wrapper'>
                <a href={caseStudy.Url} className='case-study-link'>
                    <img className='case-study-img' src={caseStudy.Image} alt={caseStudy.Name} />
                </a>
            </div>
            <div className='case-study-tagline clear'>
                <span className='case-study-name'>{caseStudy.Name}</span>
                <i className='case-study-tag-break'>{getDotSvg()}</i>
                <span className='case-study-type'>{caseStudy.Type}</span>
            </div>
        </div>
    );
}

export default CaseStudyItem;