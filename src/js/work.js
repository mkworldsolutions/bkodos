import React from 'react';
import { render } from 'react-dom';
import GoBackHeader from '../build/GoBackHeader/GoBackHeader';

(() => {
    // render go back header
    const header = document.getElementById('goback-header');
    if (header != null) {
        render(
            <GoBackHeader />,
            header
        );
    }
})();