import React, { Component } from 'react';
import MomentsContext from '../../contexts/MomentsContext'
import './ConnectionToggle.css'

export default class ConnectionToggle extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
    }

    handleClickFollowers = () => {
        const { setFollowingActiveFalse } = this.context
        setFollowingActiveFalse()
    }

    handleClickFollowing = () => {
        const { setFollowingActiveTrue } = this.context
        setFollowingActiveTrue()
    }

    handleKeyFollowersPressed = (ev) => {
        if (ev.key === 'Enter') {
            this.handleClickFollowers()
        }
    }

    handleKeyFollowingPressed = (ev) => {
        if (ev.key === 'Enter') {
            this.handleClickFollowing()
        }
    }

    renderConnectionToggle() {
        const { followingActive } = this.context

        if (followingActive) {
            return (
                <div className='toggle-wrapper'>
                    <div 
                        className='toggle-row'
                        onClick={this.handleClickFollowers}
                        onKeyDown={this.handleKeyFollowersPressed}
                        value='followers'
                        tabIndex='0'
                        role='button'
                        aria-label='followers-button-clickable'
                        aria-expanded='false'
                    >
                        <span className='toggle-text'>130 Followers</span>
                    </div>
                    <div 
                        className='toggle-row active'
                        onClick={this.handleClickFollowing}
                        tabIndex='0'
                        role='button'
                        aria-label='following-button-clickable'
                        aria-expanded='false'
                    >
                        <span className='toggle-text'>102 Following</span>
                    </div>
                </div>
            )
        }
        return (
            <div className='toggle-wrapper'>
                <div 
                    className='toggle-row active'
                    onClick={this.handleClickFollowers}
                    onKeyDown={this.handleKeyFollowersPressed}
                    tabIndex='0'
                    role='button'
                    aria-label='followers-button-clickable'
                    aria-expanded='false'
                >
                    <span className='toggle-text'>130 Followers</span>
                </div>
                <div 
                    className='toggle-row'
                    onClick={this.handleClickFollowing}
                    onKeyDown={this.handleKeyFollowingPressed}
                    tabIndex='0'
                    role='button'
                    aria-label='followers-button-clickable'
                    aria-expanded='false'
                >
                    <span className='toggle-text'>102 Following</span>
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
                {this.renderConnectionToggle()}
            </div>
        )
    }
}