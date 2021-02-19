import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MomentsContext from '../../contexts/MomentsContext'
import MomentsApiService from '../../services/moments-api-service'
import './UserCount.css'

export default class ProfileUserInformation extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
    }

    componentDidMount() {
        const { setUserCounts } = this.context

        MomentsApiService.getUserCounts()
            .then(res => setUserCounts(res))
            .catch(err => this.setState({ error: err}))
    }

    handleClickFollowers = () => {
        const { setFollowingActiveFalse } = this.context
        setFollowingActiveFalse()
    }

    handleClickFollowing = () => {
        const { setFollowingActiveTrue } = this.context
        setFollowingActiveTrue()
    }

    render() {
        const { error } = this.state
        const { requestedUser, userCounts } = this.context
        console.log('counts', userCounts)

        let userFollowers = []
        let userFollowing = []
        let userPosts = []

        if (userCounts.length !== 0) {
            userFollowers = parseInt(userCounts.userFollowerCount[0].count)
            userFollowing = parseInt(userCounts.userFollowingCount[0].count)
            userPosts = parseInt(userCounts.userPostCount[0].count)
        }

        if (requestedUser === false) {
            return (
                <div>
                    <div 
                        role='alert' 
                        className='error-message'
                        aria-live='assertive'
                    >
                        {error && <p>{error}</p>}
                    </div>
                    <div className='counts-wrapper'>
                        <Link 
                            to='/connection'
                            className='counts-column'
                            onClick={this.handleClickFollowers}
                        >
                            <span>{userFollowers}</span>
                            <span className='counts'>Followers</span>
                        </Link>
                        <div className='counts-column'>
                            <span>{userPosts}</span>
                            <span className='counts'>Posts</span>
                        </div>
                        <Link 
                            to='/connection'
                            className='counts-column'
                            onClick={this.handleClickFollowing}
                        >
                            <span>{userFollowing}</span>
                            <span className='counts'>Following</span>
                        </Link>
                    </div>
                </div>
            )
        } else {
            return ''
        }
    }
}
