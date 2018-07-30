import React from 'react';
import { render } from 'react-dom';
import GoBackHeader from '../build/GoBackHeader/GoBackHeader';
import NavigationHeader from '../build/NavigationHeader/NavigationHeader';
import NavigationFooter from '../build/NavigationFooter/NavigationFooter';

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