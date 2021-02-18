import React, { Component } from 'react'

const MomentsContext = React.createContext({
    data: false,
    expandUserGallery: false,
    expandedId: null,
    followingActive: false,
    showCaptionInput: false,
    userCaptions: [],
    userFeed: [],
    userFollowers: [],
    userFollowing: [],
    userPosts: [],
    userProfilePicture: {},
    setDataFalse: () => { },
    setDataTrue: () => { },
    setExpandUserGalleryFalse: () => { },
    setExpandUserGalleryTrue: () => { },
    setFollowingActiveFalse: () => { },
    setFollowingActiveTrue: () => { },
    setShowCaptionInputFalse: () => { },
    setShowCaptionInputTrue: () => { },
    setUserCaptions: () => { },
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
        showCaptionInput: false,
        userCaptions: [],
        userFeed: [],
        userFollowers: [],
        userFollowing: [],
        userPosts: [],
        userProfilePicture: {},
        
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

    setShowCaptionInputFalse = () => {
        this.setState({ showCaptionInput: false})
    }
    
    setShowCaptionInputTrue = () => {
        this.setState({ showCaptionInput: true })
    }

    setUserCaptions = userCaptions => {
        this.setState({ userCaptions })
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
            showCaptionInput: this.state.showCaptionInput,
            userCaptions: this.state.userCaptions,
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
            setShowCaptionInputFalse: this.setShowCaptionInputFalse,
            setShowCaptionInputTrue: this.setShowCaptionInputTrue,
            setUserCaptions: this.setUserCaptions,
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
