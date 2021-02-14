import React, { Component } from 'react'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './ProfileUserInformation.css'

export default class ProfileUserInformation extends Component {
    static contextType = UserAndNavContext

    state = {
        error: null,
    }

    render() {
        const { user } = this.context
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
                    <div className='counts-column'>
                        <span>130</span>
                        <span className='counts'>Followers</span>
                    </div>
                    <div className='counts-column'>
                        <span>57</span>
                        <span className='counts'>Posts</span>
                    </div>
                    <div className='counts-column'>
                        <span>102</span>
                        <span className='counts'>Following</span>
                    </div>
                </div>
                <ProfilePicture />
                <div className='user-profile-information'>
                    <h2 className='user-handle'>{user.username}</h2>
                    <span className='user-fullname'>{user.fullname}</span>
                    <div className='user-bio-wrapper'>
                        <span>"{user.about_user}"</span>
                    </div>
                </div>
            </div>
        )
    }

}