import React, { Component } from 'react'
import MomentsContext from '../../contexts/MomentsContext'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import ProfileGallery from '../../components/ProfileGallery/ProfileGallery'
import ProfileGalleryExpanded from '../../components/ProfileGalleryExpanded/ProfileGalleryExpanded'
import ProfileUserInformation from '../../components/ProfileUserInformation/ProfileUserInformation'

export default class ProfileRoute extends Component {
    static contextType = MomentsContext

    // see if we can get rearrange this a bit
    // componentDidMount() {
    //     const { setExpandUserGalleryFalse } = this.context
    //     setExpandUserGalleryFalse()
    // }

    render() {
        const { expandUserGallery } = this.context
        // console.log('expand', expandUserGallery)
        if (expandUserGallery === false) {
            return (
                <section className='profile-route'>
                    <ProfileUserInformation />
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
