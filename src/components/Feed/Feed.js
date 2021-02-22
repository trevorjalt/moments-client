import React, { Component } from 'react';
import MomentsContext from '../../contexts/MomentsContext'
import MomentsApiService from '../../services/moments-api-service';
import { buffTo64, NiceDate } from '../Utils/Utils'
import { parseISO } from 'date-fns'
import ProfilePictureDefault from '../ProfilePicture/images/profile-picture-default.png'
import { Link } from 'react-router-dom';


export default class Feed extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
    }

    componentDidMount() {
        const { setUserFeed } = this.context

        MomentsApiService.getUserFeed()
            .then(res => setUserFeed(res))
            .catch(err => this.setState({ error: err}))

    }

    handleClick = val => {
        const { setRequestedUserTrue, setRequestedUserInfo } = this.context
        setRequestedUserTrue()
        setRequestedUserInfo(val)
    }

    renderCaption(props) {
        const { userFeed = [] } = this.context

        let caption = userFeed.find(el => el.post_photo_id === props)
 
        if (caption) {
            return (
                <div>
                    <span className='caption-username'>
                        {caption.username}
                    </span>
                    <span>
                        {caption.caption}
                    </span>
                </div>
            )
        }
    }

    renderPostPhoto(props) {
        const { userFeed } = this.context

        let postPhoto = userFeed.find(el => el.photo_id === props)

        if (postPhoto) {
            return (
                <div>
                    <img
                        alt='user-post'
                        src={`data:image/${postPhoto.photo_img_type};base64,${buffTo64(postPhoto.photo_img_file.data)}`}
                    />
                </div>
            )
        }  
    }

    renderProfilePictures(props) {
        const { userFeed } = this.context

        let userProfilePic = userFeed.find(el => el.id === props)

        if (userProfilePic && userProfilePic.img_type !== null) {
            return (
                <Link
                    to={'profile'}
                    className='feed-header'
                    onClick={() => this.handleClick(userProfilePic)}
                >
                    <img
                        alt='current-user-profile'
                        src={`data:image/${userProfilePic.img_type};base64,${buffTo64(userProfilePic.img_file.data)}`}
                        className='feed-profile-picture circular-landscape'
                    />
                    <span className='feed-username'>{userProfilePic.username}</span>
                </Link>
            )
        } else {
            return (
                <div className='feed-header'>
                    <img 
                        className='feed-profile-picture circular-landscape'
                        src={ProfilePictureDefault} 
                        alt='default-user-profile'
                    />
                </div> 
            )                            
        }
    }

    renderUserFeed() {
        const { userFeed } = this.context

        if (userFeed.length !== 0 ) {
            return (
                userFeed.map((val, index) => (
                    <div key={index} className='feed-wrapper'>
                        {this.renderProfilePictures(val.id)}
                        <div 
                            className='feed-container' 
                            tabIndex='0'
                            role='feed'
                            aria-label='user profile'
                        >
                            {this.renderPostPhoto(val.photo_id)}
                        </div>
                        <div className='feed-post-information-wrapper'>
                            <div className='caption-wrapper'>
                                {this.renderCaption(val.photo_id)}
                            </div>
                            <div className='date-wrapper'>
                                <span className='caption-date'>
                                    <NiceDate date={parseISO(val.photo_date_created)} />
                                </span>
                            </div>
                        </div>
                    </div> 
                
                ))
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
                <div className='expanded-gallery'>
                    {this.renderUserFeed()}
                </div>
            </div>
        )
    }
}
