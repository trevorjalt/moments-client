import React, { Component } from 'react'
import ProfileUserInformation from '../../components/ProfileUserInformation/ProfileUserInformation'
import ProfileGallery from '../../components/ProfileGallery/ProfileGallery'

export default class LandingPage extends Component {
    render() {
        return (
            <section className='profile-route'>
                <ProfileUserInformation />
                <ProfileGallery />
            </section>
        )
    }
}
