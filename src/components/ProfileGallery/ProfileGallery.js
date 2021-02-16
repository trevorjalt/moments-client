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
        const { setUserPosts } = this.context
        MomentsApiService.getPostPhoto()
            .then(res => setUserPosts(res))
            .catch(err => this.setState({ error: err}))
    }

    handleKeyPressed = event => {
        if (event.key === 'Enter') {
            this.handleGalleryClick()
        }
    }

    handleGalleryClick = (id) => {
        this.context.setExpandUserGalleryTrue(id)
    }

    renderGallery() {
        const { userPosts } = this.context

        if (userPosts.length !== 0) {
            return (
                userPosts.map((val) => (
                    <div 
                        key={val.id}
                        onClick={() => this.handleGalleryClick(val.id)}
                        onKeyDown={this.handleKeyPressed}
                        tabIndex='0'
                        role='button'
                        aria-label='user-post-clickable'
                        aria-expanded='false'
                        ref={this.divToFocus}
                    >
                        {/* <h4><NiceDate date={parseISO(val.date_created)} /></h4> */}
                        <div className='img-container'>
                            <img
                                className='gallery-img'
                                alt={val.name}
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
