import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MomentsContext from '../../contexts/MomentsContext'
import './UserCount.css'

export default class ProfileUserInformation extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
    }

    handleClickFollowers = () => {
        const { 
            setFollowingActiveFalse, 
            setFollowersActiveTrue 
        } = this.context

        setFollowingActiveFalse()
        setFollowersActiveTrue()
    }

    handleClickFollowing = () => {
        const { 
            setFollowersActiveFalse, 
            setFollowingActiveTrue 
        } = this.context
        
        setFollowersActiveFalse()
        setFollowingActiveTrue()
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
                <div className='counts-wrapper'>
                    <Link 
                        to='/connection'
                        className='counts-column'
                        onClick={this.handleClickFollowers}
                    >
                        <span>130</span>
                        <span className='counts'>Followers</span>
                    </Link>
                    <div className='counts-column'>
                        <span>57</span>
                        <span className='counts'>Posts</span>
                    </div>
                    <Link 
                        to='/connection'
                        className='counts-column'
                        onClick={this.handleClickFollowing}
                    >
                        <span>102</span>
                        <span className='counts'>Following</span>
                    </Link>
                </div>
            </div>
        )
    }
}
