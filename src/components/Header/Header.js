import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import TokenService from '../../services/token-service'
import NavHamburger from '../NavHamburger/NavHamburger'
import NavNewPost from '../NavNewPost/NavNewPost'
import './Header.css'

export default class Header extends Component {
    static contextType = UserAndNavContext

    render() {
        return (
            <header role='banner'>
                <div className={this.context.showNav
                    ? 'Header-Solid'
                    : 'Header'}>
                    <NavHamburger />
                    <h1>
                        <Link 
                            to='/feed' 
                            className='logo'
                            onClick={this.context.setShowNavFalse}
                        >
                            moments
                        </Link>
                    </h1>
                    {TokenService.hasAuthToken()
                        ?   <Link
                                to='/post-upload'
                            >
                                <NavNewPost />
                            </Link>
                        :   <span className='invisible-icon' />}
                </div>
            </header>
        )
    }
}
