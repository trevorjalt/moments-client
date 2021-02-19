import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import TokenService from '../../services/token-service'
import './NavMenu.css'


export default class NavMenu extends Component {
    static contextType = UserAndNavContext

    handleLogoutClick = () => {
        this.context.processLogout()
        this.context.setShowNav()
    }

    handleNavLinkClick = () => {
        const { setRequestedUserFalse } = this.props
        const { setShowNav } = this.context

        setRequestedUserFalse()
        setShowNav()
    }

    renderLogoutLink() {
        return (
            <div>
                <nav 
                    role='navigation'
                    className='navigation'
                >
                    <div className='navigation-menu-wrapper'>
                        <Link
                            to={'/profile'}
                            className='navigation-link-wrapper'
                            onClick={this.handleNavLinkClick}
                        >
                            Profile
                        </Link>
                        <Link
                            to='/feed'
                            className='navigation-link-wrapper'
                            onClick={this.handleNavLinkClick}
                        >
                            Feed
                        </Link>
                        <Link
                            to='/connection'
                            className='navigation-link-wrapper'
                            onClick={this.handleNavLinkClick}
                        >
                            Connections
                        </Link>
                        <Link
                            to='/account'
                            className='navigation-link-wrapper'
                            onClick={this.handleNavLinkClick}
                        >
                            Account
                        </Link>
                        <Link
                            to='/login'
                            className='navigation-link-wrapper'
                            onClick={this.handleLogoutClick}
                        >
                            Logout
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <nav 
                role='navigation'
                className={this.context.showNav
                    ? 'navigation'
                    : 'navigation-closed'}
            >
                <div className='navigation-menu-wrapper'>
                    <Link
                        to='/login'
                        className='navigation-link-wrapper'
                        onClick={this.context.setShowNav}
                    >
                        Login
                    </Link>
                    <Link
                        to='/register'
                        className='navigation-link-wrapper'
                        onClick={this.context.setShowNav}
                    >
                        Sign up
                    </Link>
                </div>
            </nav>
        )
    }

    renderNavMenu() {
        if (this.context.showNav === true) {
            return (
                <div
                    aria-live='assertive'
                    aria-relevant='all'
                >
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderNavMenu()}
            </div>
        )
    }
}
