import React, { Component } from 'react';
import { httpRequest } from '../utils/httpRequest';

import MenuItem from './MenuItem';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuLoaded: false,
            menuData: {}
        };

        // get menu json
        httpRequest("/js/menu.json", this.renderMenu);
    }

    renderMenu = (menuJson) => {
        const menu = JSON.parse(menuJson);
        this.setState({
            menuLoaded: menu.menu.length > 0,
            menuData: menu
        });
    }

    render() {
        const {
            menuLoaded,
            menuData
        } = this.state;

        if (!menuLoaded) {
            return null;
        }

        const pathName = window.location.pathname;
        return (
            <div className='menu-container clear'>
                <div className='logo-wrapper'>
                    <a className='logo-link' href='/'>
                        <img className='logo-img' src='/images/logo.png' alt='BK' />
                    </a>
                </div>
                <div className='menu-wrapper'>
                    <ul className='menu clear'>
                        {
                            menuData.menu.map((menuItem, key) => {
                                return (
                                    <MenuItem key={key} menuItem={menuItem} pathName={pathName} />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;