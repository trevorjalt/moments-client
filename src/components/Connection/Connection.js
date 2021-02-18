import React, { Component } from 'react';
import MomentsContext from '../../contexts/MomentsContext'
import { buffTo64, NiceDate } from '../Utils/Utils'
import { parseISO } from 'date-fns'
import ProfilePictureDefault from '../ProfilePicture/images/profile-picture-default.png'
import './Connection.css'
import MomentsApiService from '../../services/moments-api-service';



export default class Connection extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
    }

    componentDidMount() {
        const { setUserFollowers, setUserFollowing } = this.context

        MomentsApiService.getUserFollowers()
            .then(res => setUserFollowers(res))
            .catch(err => this.setState({ error: err}))

        MomentsApiService.getUserFollowing()
            .then(res => setUserFollowing(res))
            .catch(err => this.setState({ error: err}))
    }

    handleClickBack = () => {
        // this.context.setExpandUserGalleryFalse()
        this.props.history.push('/profile')
    }

    handleKeyPressed = (ev) => {
        if (ev.key === 'Enter') {
            this.handleClickBack()
        }
    }

    renderConnectionList() {
        const { 
            followersActive, 
            followingActive, 
            userFollowers, 
            userFollowing, 
            userProfilePicture 
        } = this.context
 
        if (followersActive === true) {
            return (
                userFollowers.map((val) => (                   
                    <div key={val.id} className='connection-wrapper'>
                        <div className='connection-information'>
                        {this.renderFollowersPicture(val.id)}
                        {this.renderFollowersData(val.id)}
                        </div>         
                    </div>
                ))
            )
        }
    }

    renderConnectionNav() {
        const { user } = this.props

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
                    <span className='connection-nav-username'>{user.user.username}</span>
                    
                </div>
            </div>
        )
    }

    renderFollowersData(props) {
        const { userFollowers } = this.context
        
        let follower = userFollowers.find(el => el.id === props)
        // console.log('test', userFollowers[0].id)
        console.log(follower)

        if (follower) {
            return (
                <div className='connection-name-wrapper'>
                    <span className='caption-username'>
                        {follower.username}
                    </span>
                    <span className='connection-fullname'>
                        {follower.fullname}
                    </span>
                </div>
            )
        }
    }

    renderFollowersPicture(props) {
        const { userFollowers, current } = this.context

        let follower = userFollowers.find(el => el.id === props)
        console.log('followerPhoto', follower)

        if (follower && follower.img_type !== null) {
            return (
                <div className='feed-header'>
                    <img
                        alt='current-user-profile-picture'
                        src={`data:image/${follower.img_type};base64,${buffTo64(follower.img_file.data)}`}
                        // src={ProfilePictureDefault}
                        className='feed-profile-picture circular-landscape'
                    />
                </div>
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

    render() {
        const { error } = this.state
        console.log('followers', this.context.userFollowers)
        console.log('following', this.context.userFollowing)
        console.log('loaded', this.state.followersLoaded)
        return (
            <div>
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                {this.renderConnectionNav()}
                {this.renderConnectionList()}
            </div>
        )
    }
}