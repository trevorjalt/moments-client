import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './Account.css'


export default class Account extends Component {
    static contextType = UserAndNavContext

    state = {
        error: null,
    }

    render() {
        const { user } = this.context
        const { error } = this.state

        return (
            <div className='account-wrapper'>
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                <div>
                    <ProfilePicture />
                    <div className='update-profile-picture-wrapper'>
                        <Link 
                            to='/profile-picture-upload'
                            className='link-text'
                        >
                            Update Profile Picture
                        </Link>
                    </div>
                </div>
                <div className='account-information-wrapper'>
                    <h3 className='account-label'>
                        Name
                    </h3>
                    <div className='account-details'>
                        <span className='account-information'>
                            {user.fullname}
                        </span>
                    </div>
                </div>
                <div className='account-information-wrapper'>
                    <h3 className='account-label'>
                        Username
                    </h3>
                    <div className='account-details'>
                        <span className='account-information'>
                            {user.username}
                        </span>
                    </div>
                </div>
                <div className='account-information-wrapper'>
                    <h3 className='account-label'>
                        Email
                    </h3>
                    <div className='account-details'>
                        <span className='account-information'>
                            {user.email}
                        </span>
                    </div>
                </div>
                <div className='account-information-wrapper'>
                    <h3 className='account-label'>
                        About
                    </h3>
                    <div className='account-details'>
                        <span className='account-information'>
                            {user.about_user}
                        </span>
                    </div>
                </div>
                <div className='account-information-wrapper'>
                    <h3 className='account-label'>
                        Privacy
                    </h3>
                    <div className='account-details'>
                        <span className='account-information'>
                            {user.privacy}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
