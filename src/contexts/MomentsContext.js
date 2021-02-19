import React, { Component } from 'react'

const MomentsContext = React.createContext({
    data: false,
    expandUserGallery: false,
    expandedId: null,
    followingActive: false,
    requestedUser: false,
    requestedUserCaptions: [],
    requestedUserInfo: null,
    requestedUserPosts: [],
    requestedUserProfilePicture: [],
    showCaptionInput: false,
    userCaptions: [],
    userCounts: [],
    userFeed: [],
    userFollowers: [],
    userFollowing: [],
    userPosts: [],
    userProfilePicture: [],
    setDataFalse: () => { },
    setDataTrue: () => { },
    setExpandUserGalleryFalse: () => { },
    setExpandUserGalleryTrue: () => { },
    setFollowingActiveFalse: () => { },
    setFollowingActiveTrue: () => { },
    setRequestedUserFalse: () => { },
    setRequestedUserTrue: () => { },
    setRequestedUserCaptions: () => { },
    setRequestedUserInfo: () => { },
    setRequestedUserPosts: () => { },
    setRequestedUserProfilePicture: () => { },
    setShowCaptionInputFalse: () => { },
    setShowCaptionInputTrue: () => { },
    setUserCaptions: () => { },
    setUserCounts: () => { },
    setUserFeed: () => { },
    setUserFollowers: () => { },
    setUserFollowing: () => { },
    setUserPosts: () => { },
    setUserProfilePicture: () => { },

})

export default MomentsContext

export class MomentsProvider extends Component {
    state = {
        data: null,
        expandUserGallery: false,
        expandedId: null,
        followingActive: false,
        requestedUser: false,
        requestedUserCaptions: [],
        requestedUserInfo: null,
        requestedUserPosts: [],
        requestedUserProfilePicture: [],
        showCaptionInput: false,
        userCaptions: [],
        userCounts: [],
        userFeed: [],
        userFollowers: [],
        userFollowing: [],
        userPosts: [],
        userProfilePicture: [],       
    }

    setDataFalse = () => {
        this.setState({ data: false })
    }

    setDataTrue = () => {
        this.setState({ data: true })
    }

    setExpandUserGalleryFalse = () => {
        this.setState({ expandUserGallery: false })
    }

    setExpandUserGalleryTrue = (id) => {
        this.setState({ 
            expandUserGallery: true,
            expandedId: id,
        })
    }

    setFollowingActiveFalse = () => {
        this.setState({ followingActive: false})
    }
    
    setFollowingActiveTrue = () => {
        this.setState({ followingActive: true })
    }

    setRequestedUserFalse = () => {
        this.setState({ requestedUser: false })
    }

    setRequestedUserTrue = () => {
        this.setState({ requestedUser: true })
    }

    setRequestedUserCaptions = requestedUserCaptions => {
        this.setState({ requestedUserCaptions})
    }

    setRequestedUserInfo = requestedUserInfo => {
        this.setState({ requestedUserInfo })
    }

    setRequestedUserPosts = requestedUserPosts => {
        this.setState({ requestedUserPosts })
    }

    setRequestedUserProfilePicture = requestedUserProfilePicture => {
        this.setState({ requestedUserProfilePicture })
    }

    setShowCaptionInputFalse = () => {
        this.setState({ showCaptionInput: false})
    }
    
    setShowCaptionInputTrue = () => {
        this.setState({ showCaptionInput: true })
    }

    setUserCaptions = userCaptions => {
        this.setState({ userCaptions })
    }

    setUserCounts = userCounts => {
        this.setState({ userCounts })
    }

    setUserFeed = userFeed => {
        this.setState({ userFeed })
    }

    setUserFollowers = userFollowers => {
        this.setState({ userFollowers })
    }

    setUserFollowing = userFollowing => {
        this.setState({ userFollowing })
    }

    setUserPosts = userPosts => {
        this.setState({ userPosts })
    }

    setUserProfilePicture = userProfilePicture => {
        this.setState({ userProfilePicture })
    }

    render() {
        const value = {
            data: this.state.data,
            expandUserGallery: this.state.expandUserGallery,
            expandedId: this.state.expandedId,
            followingActive: this.state.followingActive,
            requestedUser: this.state.requestedUser,
            requestedUserCaptions: this.state.requestedUserCaptions,
            requestedUserInfo: this.state.requestedUserInfo,
            requestedUserPosts: this.state.requestedUserPosts,
            requestedUserProfilePicture: this.state.requestedUserProfilePicture,
            showCaptionInput: this.state.showCaptionInput,
            userCaptions: this.state.userCaptions,
            userCounts: this.state.userCounts,
            userFeed: this.state.userFeed,
            userFollowers: this.state.userFollowers,
            userFollowing: this.state.userFollowing,
            userPosts: this.state.userPosts,
            userProfilePicture: this.state.userProfilePicture,
            setDataFalse: this.setDataFalse,
            setDataTrue: this.setDataTrue,
            setExpandUserGalleryFalse: this.setExpandUserGalleryFalse,
            setExpandUserGalleryTrue: this.setExpandUserGalleryTrue,
            setFollowingActiveFalse: this.setFollowingActiveFalse,
            setFollowingActiveTrue: this.setFollowingActiveTrue,
            setRequestedUserFalse: this.setRequestedUserFalse,
            setRequestedUserTrue: this.setRequestedUserTrue,
            setRequestedUserCaptions: this.setRequestedUserCaptions,
            setRequestedUserInfo: this.setRequestedUserInfo,
            setRequestedUserPosts: this.setRequestedUserPosts,
            setRequestedUserProfilePicture: this.setRequestedUserProfilePicture,
            setShowCaptionInputFalse: this.setShowCaptionInputFalse,
            setShowCaptionInputTrue: this.setShowCaptionInputTrue,
            setUserCaptions: this.setUserCaptions,
            setUserCounts: this.setUserCounts,
            setUserFeed: this.setUserFeed,
            setUserFollowers: this.setUserFollowers,
            setUserFollowing: this.setUserFollowing,
            setUserPosts: this.setUserPosts,
            setUserProfilePicture: this.setUserProfilePicture,
        }
        return (
            <MomentsContext.Provider value={value}>
                {this.props.children}
            </MomentsContext.Provider>
        )
    }
}
