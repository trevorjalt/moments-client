import React, { Component } from 'react'
import MomentsContext from '../../contexts/MomentsContext'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import ProfileGallery from '../../components/ProfileGallery/ProfileGallery'
import ProfileGalleryExpanded from '../../components/ProfileGalleryExpanded/ProfileGalleryExpanded'
import ProfileUserInformation from '../../components/ProfileUserInformation/ProfileUserInformation'

export default class ProfileRoute extends Component {
    static contextType = MomentsContext

    render() {
        const { 
            expandUserGallery, 
            requestedUser, 
            requestedUserInfo } = this.context

        if (expandUserGallery === false) {
            return (
                <section className='profile-route'>
                    <ProfileUserInformation 
                        requestedUser={requestedUser}
                        requestedUserInfo={requestedUserInfo}
                    />
                    <ProfileGallery />
                </section>
            )
        } else {
            return (
                <section className='profile-route'>
                    <UserAndNavContext.Consumer>
                        {user => (
                            <ProfileGalleryExpanded user={user} />
                        )}
                    </UserAndNavContext.Consumer>
                </section>
            )
        }
    }
}
