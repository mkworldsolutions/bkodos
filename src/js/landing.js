import React from 'react';
import { render } from 'react-dom';
import { CaseStudies, LandingA1Mod, References } from '../components';

(() => {
    // render A1 mod
    const landingA1Mod = document.getElementById('landing-a1-mod');
    if (landingA1Mod !== null) {
        render(
            <LandingA1Mod />,
            landingA1Mod
        );
    }
    // render references
    const references = document.getElementById('references');
    if (references !== null) {
        render(
            <References widthToOneRef='1100' />,
            references
        );
    }
    // render case studies
    const caseStudy = document.getElementById('case-study');
    if (caseStudy !== null) {
        render(
            <CaseStudies />,
            caseStudy
        );
    }
})();
