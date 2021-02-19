import React, { Component } from 'react';
import MomentsContext from '../../contexts/MomentsContext'
import MomentsApiService from '../../services/moments-api-service'
import { buffTo64, NiceDate } from '../Utils/Utils'
import MomentsLogo from './images/moments-logo.png'
import { format, parseISO } from 'date-fns'
import './ProfileGallery.css'


export default class ProfileGallery extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
    }

    componentDidMount() {
        const { 
            requestedUser, 
            requestedUserInfo, 
            setRequestedUserCaptions,
            setRequestedUserPosts,
            setUserPosts, 
            setUserCaptions } = this.context

        if (requestedUser === true) {
            MomentsApiService.getRequestedUserPostPhotos(requestedUserInfo.id)
            .then(res => setRequestedUserPosts(res))
            .catch(err => this.setState({ error: err}))

            MomentsApiService.getRequestedUserCaptions(requestedUserInfo.id)
                .then(res => setRequestedUserCaptions(res))
                .catch(err => this.setState({ error: err }))
        }

        MomentsApiService.getUserPostPhoto()
            .then(res => setUserPosts(res))
            .catch(err => this.setState({ error: err}))

        MomentsApiService.getUserCaption()
            .then(res => setUserCaptions(res))
            .catch(err => this.setState({ error: err }))
    }

    handleKeyPressed = (ev, id) => {
        if (ev.key === 'Enter') {
            this.handleGalleryClick(id)
        }
    }

    handleGalleryClick = (id) => {
        this.context.setExpandUserGalleryTrue(id)
    }

    renderGallery() {
        const { userPosts, requestedUser, requestedUserPosts } = this.context

        let displayPosts = []

        if (requestedUser === true) {
            displayPosts = requestedUserPosts
        } else {
            displayPosts = userPosts
        }

        if (displayPosts.length !== 0) {
            return (
                displayPosts.map((val) => (
                    <div 
                        key={val.id}
                        onClick={() => this.handleGalleryClick(val.id)}
                        onKeyDown={(ev) => this.handleKeyPressed(ev, val.id)}
                        tabIndex='0'
                        role='button'
                        aria-label='user-post-clickable'
                        aria-expanded='false'
                        ref={this.divToFocus}
                    >
                        <div className='img-container'>
                            <img
                                className='gallery-img'
                                alt='User gallery photos'
                                src={`data:image/${val.img_type};base64,${buffTo64(val.img_file.data)}`}
                            />
                        </div>
                    </div>
                ))
            )
        } else {
            return (
                <div className='no-posts'>
                    <img
                            className='moments-icon'
                            alt='moments-logo'
                            src={MomentsLogo}
                    />
                    <span className='no-posts-text'>no posts yet</span>
                </div>
            )
        }
    }

    render() {
        const { error } = this.state

        return (
            <div className='gallery-wrapper'>
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                {this.renderGallery()}
            </div>
        )
    }
}
