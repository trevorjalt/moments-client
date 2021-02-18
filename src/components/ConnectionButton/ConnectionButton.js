import React, { Component } from 'react';
import MomentsContext from '../../contexts/MomentsContext'
import './ConnectionButton.css'




export default class ConnectionButton extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
    }

    renderConnectionButton() {
        const { followingActive } = this.context

        if (followingActive === true) {
            return (
                <button 
                    type='button'
                    className='connection-button-active following'    
                >
                    Following
                </button>
            )
        }
        return (
            <button 
                type='button'
                className='connection-button-active'    
            >
                Remove
            </button>
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

                {this.renderConnectionButton()}
            </div>
        )
    }
}