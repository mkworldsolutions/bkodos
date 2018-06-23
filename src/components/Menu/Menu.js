import React, { Component } from 'react';

class Menu extends Component {
    constructor(props){
        super(props);        
    }
    render() {
        return (
            <div className='menu-container clear'>
                <div className='logo-wrapper'>
                    <a className='logo-link' href='#'>
                        <img className='logo-img' src='/images/logo.jpg' alt='BK'/>
                    </a>
                </div>
                <div className='menu-wrapper'>
                    <ul className='menu clear'>
                        <li className='menu-item'>
                            <a className='menu-link' href='#'>
                                Work
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a className='menu-link' href='#'>
                                About
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a className='menu-link' href='#'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;