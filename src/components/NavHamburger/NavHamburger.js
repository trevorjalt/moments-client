import React, { Component } from 'react'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import './NavHamburger.css'

export default class NavHamburger extends Component {
    static contextType = UserAndNavContext

    handleKeyPressed = (ev) => {
        if (ev.key === 'Enter') {
            this.handleNavClick()
            // this.context.setShowNav()
        }
    }

    handleNavClick = () => {
        this.context.setShowNav()
    }

    renderNavIcon() {
        if (this.context.showNav === false) {
            return (
                <div
                    className='navigation-icon'
                    onClick={this.handleNavClick}
                    onKeyDown={this.handleKeyPressed}
                    tabIndex='0'
                    role='button'
                    aria-label='navigation-menu-clickable'
                    aria-expanded='false'
                >
                    <span className='hamburger-stripe-top hamburger-stripe' />
                    <span className='hamburger-stripe-bottom hamburger-stripe' />  
                </div>
            )
        }
        return (
            <div
                className='navigation-icon' 
                onClick={this.handleNavClick}
                onKeyDown={this.handleKeyPressed} 
                tabIndex='0'
                role='button'
                aria-label='navigation-menu-clickable'
                aria-expanded='false'
            >
                <span className='hamburger-stripe-top hamburger-stripe-top-open hamburger-stripe' />
                <span className='hamburger-stripe-bottom hamburger-stripe-bottom-open hamburger-stripe' />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderNavIcon()}
            </div>
        )
    }
}
