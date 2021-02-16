import React, { Component } from 'react';
import MomentsContext from '../../contexts/MomentsContext'
import { buffTo64, NiceDate } from '../Utils/Utils'
import MomentsApiService from '../../services/moments-api-service'
import { format, parseISO } from 'date-fns'
import './ProfileGalleryExpanded.css'


export default class ProfileGalleryExpanded extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
    }

    // componentDidMount() {
    //     const { setUserPosts } = this.context
    //     MomentsApiService.getPostPhoto()
    //         .then(res => setUserPosts(res))
    //         .catch(err => this.setState({ error: err}))
    // }

    handleClickBack = () => {
        this.context.setExpandUserGalleryFalse()
    }

    renderExpandedNav() {
        const { user } = this.props
        return (
            <div className='expanded-navigation'>
                <div
                    className='back-icon'
                    onClick={this.handleClickBack}
                    onKeyDown={this.handleKeyPressed}
                    tabIndex='0'
                    role='button'
                    aria-label='new-post-clickable'
                    aria-expanded='false'
                >
                    <span className='backstripe-horizontal backstripe' />
                    <span className='backstripe-vertical backstripe' />  
                </div>
                <div className='expanded-header'>
                    <span>{user.user.fullname.toUpperCase()}</span>
                    <span className='posts-text'>Posts</span>
                </div>
            </div>
        )
    }


    renderGalleryExpanded() {
        const { userPosts, userProfilePicture, expandUserGallery } = this.context
        const { user } = this.props
        console.log(user.user.username)
        console.log('userprofilepic', userProfilePicture)

        if (expandUserGallery === true) {
            return (
                userPosts.map((val) => (
                    <div key={val.id} className='feed-wrapper'>
                        <div className='feed-header'>
                            <img
                                alt='current-user-profile-picture'
                                src={`data:image/${userProfilePicture[0].img_type};base64,${buffTo64(userProfilePicture[0].img_file.data)}`}
                                className='feed-profile-picture circular-landscape'
                            />
                            <span className='feed-username'>{user.user.username}</span>
                        </div>
                        <div className='feed-container'>
                            <img                               
                                alt={val.name}
                                src={`data:image/${val.img_type};base64,${buffTo64(val.img_file.data)}`}
                            />
                        </div>
                        <div className='feed-post-information-wrapper'>
                        <h4><NiceDate date={parseISO(val.date_created)} /></h4>
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