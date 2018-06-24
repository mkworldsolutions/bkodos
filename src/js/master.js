import React from 'react';
import { render } from 'react-dom'
import Menu from '../build/Menu/Menu';
import LandingA1Mod from '../build/LandingA1Mod/LandingA1Mod';

(() => {
    const menu = document.getElementById('menu');
    if (menu !== null) {
        render(
            <Menu />,
            menu
        )
    }

    const landingA1Mod = document.getElementById('landing-a1-mod');
    if (landingA1Mod !== null) {
        render(
            <LandingA1Mod />,
            landingA1Mod
        )
    }
})();