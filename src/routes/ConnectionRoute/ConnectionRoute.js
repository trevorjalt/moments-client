import React, { Component } from 'react'
import MomentsContext from '../../contexts/MomentsContext'
import Connection from '../../components/Connection/Connection'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import ProfileGallery from '../../components/ProfileGallery/ProfileGallery'
import ProfileGalleryExpanded from '../../components/ProfileGalleryExpanded/ProfileGalleryExpanded'
import ProfileUserInformation from '../../components/ProfileUserInformation/ProfileUserInformation'

export default class ConnectionRoute extends Component {
    static contextType = MomentsContext

    render() {
        const { expandUserGallery } = this.context

        return (
            <div>
                <UserAndNavContext.Consumer>
                    {user => (
                        <Connection 
                            user={user}
                            history={this.props.history}
                        />
                    )}
                </UserAndNavContext.Consumer>
            </div>
        )

        // if (expandUserGallery === false) {
        //     return (
        //         <section className='profile-route'>
        //             <ProfileUserInformation />
        //             <ProfileGallery />
        //         </section>
        //     )
        // } else {
        //     return (
        //         <section className='profile-route'>
        //             <UserAndNavContext.Consumer>
        //                 {user => (
        //                     <ProfileGalleryExpanded user={user} />
        //                 )}
        //             </UserAndNavContext.Consumer>
        //         </section>
        //     )
        // }
    }
}
