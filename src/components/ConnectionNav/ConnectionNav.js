import React, { Component } from 'react';
import './ConnectionNav.css'




export default class ConnectionNav extends Component {

    state = {
        error: null,
    }

    handleClickBack = () => {
        this.props.history.push('/profile')
    }

    handleKeyPressed = (ev) => {
        if (ev.key === 'Enter') {
            this.handleClickBack()
        }
    }

    renderConnectionNav() {
        const { user } = this.props

        return (
            <div className='expanded-navigation'>
                <div
                    className='back-icon'
                    onClick={this.handleClickBack}
                    onKeyDown={this.handleKeyPressed}
                    tabIndex='0'
                    role='button'
                    aria-label='back-button-clickable'
                    aria-expanded='false'
                >
                    <span className='backstripe-horizontal backstripe' />
                    <span className='backstripe-vertical backstripe' />  
                </div>
                <div className='expanded-header'>
                    <span className='connection-nav-username'>{user.user.username}</span>
                    
                </div>
            </div>
        )
    }



    render() {
        const { error } = this.state

        return (
            <div>
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                {this.renderConnectionNav()}
            </div>
        )
    }
}
