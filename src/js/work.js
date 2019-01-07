import React from 'react';
import { render } from 'react-dom';
import { NavigationFooter, NavigationHeader } from '../components';

(() => {
    // render go back header
    const header = document.getElementById('goback-header');
    if (header != null) {
        render(
            <NavigationHeader />,
            header
        );
    }
    // render footer navigation
    const footerNav = document.getElementById('goback-container');
    if (footerNav != null) {
        render(
            <NavigationFooter />,
            footerNav
        );
    }
})();
