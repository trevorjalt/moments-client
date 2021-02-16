import React, { Component } from 'react'
// import MomentsContext from '../../contexts/MomentsContext'
import MomentsApiService from '../../services/moments-api-service'
import ProfilePictureDefault from './images/profile-picture-default.png'
import { buffTo64 } from '../../components/Utils/Utils'
import './ProfilePicture.css'

export default class ProfilePicture extends Component {
    // static contextType = MomentsContext

    state = {
        error: null,
        currentProfilePicture: {}
    }

    // this componentDidMount keeps the user profile picture updated after an update
    componentDidMount() {
        // this.context.clearError()
        // const { setCurrentProfilePicture } = this.context
        MomentsApiService.getProfilePicture()
            .then(res => this.setState({ currentProfilePicture: res }))
            .catch(err => this.setState({ error: err }))
    }

    renderProfilePicture() {
        const { currentProfilePicture } = this.state

        if (!currentProfilePicture.length) {
            return (
                <div className='profile-picture'>
                    <img 
                        className='default-image'
                        src={ProfilePictureDefault} 
                        alt='default-user-profile'
                    />
                </div>
            )
        } else {
            return (
                <div className='profile-picture'>
                <img
                    alt='current-user-profile'
                    src={`data:image/${currentProfilePicture[0].img_type};base64,${buffTo64(currentProfilePicture[0].img_file.data)}`}
                    className='profile-picture-scale'
                />
                </div>
            )
        }

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
                {this.renderProfilePicture()}
            </div>
        )
        
    }
}
