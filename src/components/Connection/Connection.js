import React, { Component } from 'react';
import MomentsContext from '../../contexts/MomentsContext'
import MomentsApiService from '../../services/moments-api-service';
import { buffTo64 } from '../Utils/Utils'
import ConnectionButton from '../ConnectionButton/ConnectionButton'
import ConnectionNav from '../ConnectionNav/ConnectionNav'
import ConnectionToggle from '../ConnectionToggle/ConnectionToggle'
import ProfilePictureDefault from '../ProfilePicture/images/profile-picture-default.png'
import './Connection.css'


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

    renderConnectionData(props) {
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

    renderConnectionList() {
        const {  
            followingActive, 
            userFollowers, 
            userFollowing, 
        } = this.context

        if (followingActive === true ) {
            return (
                userFollowing.map((val) => (                   
                    <div key={val.id} className='connection-wrapper'>
                        <div className='connection-information'>
                        {this.renderConnectionPicture(val.id)}
                        {this.renderConnectionData(val.id)}
                        </div>
                        <ConnectionButton />         
                    </div>
                ))
            )
        }
        return (
            userFollowers.map((val) => (                   
                <div key={val.id} className='connection-wrapper'>
                    <div className='connection-information'>
                    {this.renderConnectionPicture(val.id)}
                    {this.renderConnectionData(val.id)}
                    </div>
                    <ConnectionButton />         
                </div>
            ))
        )
    }

    renderConnectionPicture(props) {
        const { userFollowers } = this.context

        let follower = userFollowers.find(el => el.id === props)
        console.log('followerPhoto', follower)

        if (follower && follower.img_type !== null) {
            return (
                <div className='feed-header'>
                    <img
                        alt='current-user-profile-picture'
                        src={`data:image/${follower.img_type};base64,${buffTo64(follower.img_file.data)}`}
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
        const { user, history } = this.props
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
                <ConnectionNav user={user} history={history} />
                <ConnectionToggle />
                {this.renderConnectionList()}
            </div>
        )
    }
}
