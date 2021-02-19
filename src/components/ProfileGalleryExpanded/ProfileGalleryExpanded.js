import React, { Component } from 'react';
import MomentsContext from '../../contexts/MomentsContext'
import { buffTo64, NiceDate } from '../Utils/Utils'
import { parseISO } from 'date-fns'
import ProfilePictureDefault from '../ProfilePicture/images/profile-picture-default.png'
import './ProfileGalleryExpanded.css'


export default class ProfileGalleryExpanded extends Component {
    static contextType = MomentsContext

    constructor(props) {
        super(props)
        this.divToFocus = []
    }

    state = {
        error: null,
    }

    componentDidMount() {
        const { expandedId } = this.context

        this.setState({ expandedId })
    }

    componentDidUpdate() {
        this.handleScroll()
    }

    handleClickBack = () => {
        this.context.setExpandUserGalleryFalse()
    }

    handleKeyPressed = (ev) => {
        if (ev.key === 'Enter') {
            this.handleClickBack()
        }
    }

    handleScroll = () => {
        const { expandedId } = this.context
        let divObject = this.divToFocus.find(obj => obj.id === expandedId)

        if (divObject.ref !== undefined) {
            divObject.ref.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    renderCaption(props) {
        const { 
            requestedUser, 
            requestedUserCaptions, 
            requestedUserInfo, 
            userCaptions } = this.context
        const { user } = this.props
        
        let userInfoDisplay = []
        let captionDisplay = []

        if (requestedUser === true) {
            userInfoDisplay = requestedUserInfo
            captionDisplay = requestedUserCaptions
        } else {
            userInfoDisplay = user.user
            captionDisplay = userCaptions
        }

        let caption = captionDisplay.find(el => el.post_photo_id === props)

        if (caption) {
            return (
                <div>
                    <span className='caption-username'>
                        {userInfoDisplay.username}
                    </span>
                    <span>
                        {caption.caption}
                    </span>
                </div>
            )
        }
    }

    renderExpandedNav() {
        const { requestedUser, requestedUserInfo } = this.context
        const { user } = this.props

        let userName = []
        
        if (requestedUser === true) {
            userName = requestedUserInfo
        } else {
            userName = user.user
        }

        return (
            <div className='expanded-navigation'>
                <div
                    className='back-icon'
                    onClick={this.handleClickBack}
                    onKeyDown={this.handleKeyPressed}
                    tabIndex='0'
                    role='button'
                    aria-label='back-button-clickable'
                    aria-expanded='false'
                >
                    <span className='backstripe-horizontal backstripe' />
                    <span className='backstripe-vertical backstripe' />  
                </div>
                <div className='expanded-header'>
                    <span>{userName.fullname.toUpperCase()}</span>
                    <span className='posts-text'>Posts</span>
                </div>
            </div>
        )
    }

    renderGalleryExpanded() {
        const { 
            requestedUser,
            requestedUserInfo,
            requestedUserProfilePicture,
            requestedUserPosts,
            userPosts, 
            userProfilePicture, 
            expandUserGallery } = this.context
        const { user } = this.props

        let postDisplay = []
        let userDisplay = []
        let profileDisplay = []

        if (requestedUser === true) {
            postDisplay = requestedUserPosts
            userDisplay = requestedUserInfo
            profileDisplay = requestedUserProfilePicture
        } else {
            postDisplay = userPosts
            userDisplay = user.user
            profileDisplay = userProfilePicture
        }
 
        if (expandUserGallery === true) {
            return (
                postDisplay.map((val, index) => (
                    
                    <div key={val.id} className='feed-wrapper' ref={ref => this.divToFocus[index] = {ref, id: val.id}}>
                            {profileDisplay.length !== 0
                                ? <div className='feed-header'>
                                    <img
                                        alt='current-user-profile'
                                        src={`data:image/${profileDisplay[0].img_type};base64,${buffTo64(profileDisplay[0].img_file.data)}`}
                                        className='feed-profile-picture circular-landscape'
                                    />
                                    <span className='feed-username'>{userDisplay.username}</span>
                                </div>
                                : <div className='feed-header'>
                                    <img 
                                        className='feed-profile-picture circular-landscape'
                                        src={ProfilePictureDefault} 
                                        alt='default-user-profile'
                                    />
                                    <span className='feed-username'>{userDisplay.username}</span>
                                </div>
                                
                            }
                        <div 
                            className='feed-container' 
                            tabIndex='0'
                            aria-label='user post photo'
                        >
                            <img                               
                                alt='user post'
                                src={`data:image/${val.img_type};base64,${buffTo64(val.img_file.data)}`}
                            />
                        </div>
                        <div className='feed-post-information-wrapper'>
                            <div className='caption-wrapper'>
                                {this.renderCaption(val.id)}
                            </div>
                            <div className='date-wrapper'>
                                <span className='caption-date'>
                                    <NiceDate date={parseISO(val.date_created)} />
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
                {this.renderExpandedNav()}
                <div className='expanded-gallery'>
                    {this.renderGalleryExpanded()}
                </div>
            </div>
        )
    }
}
