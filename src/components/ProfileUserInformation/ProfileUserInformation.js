import React, { Component } from 'react'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import UserCount from '../UserCount/UserCount'
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
                <UserCount />
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
