import React, { Component } from 'react'
import ProfileUserInformation from '../../components/ProfileUserInformation/ProfileUserInformation'

export default class LandingPage extends Component {
    render() {
        return (
            <section className='profile-route'>
                <ProfileUserInformation />
            </section>
        )
    }
}
