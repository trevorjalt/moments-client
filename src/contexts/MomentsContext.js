import React, { Component } from 'react'

const MomentsContext = React.createContext({
    data: false,
    expandUserGallery: false,
    expandedId: null,
    showCaptionInput: false,
    userPosts: [],
    userProfilePicture: {},
    setDataFalse: () => { },
    setDataTrue: () => { },
    setExpandUserGalleryFalse: () => { },
    setExpandUserGalleryTrue: () => { },
    setShowCaptionInputFalse: () => { },
    setShowCaptionInputTrue: () => { },
    setUserPosts: () => { },
    setUserProfilePicture: () => { },

})

export default MomentsContext

export class MomentsProvider extends Component {
    state = {
        data: null,
        expandUserGallery: false,
        expandedId: null,
        showCaptionInput: false,
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

    setShowCaptionInputFalse = () => {
        this.setState({ showCaptionInput: false})
    }
    
    setShowCaptionInputTrue = () => {
        this.setState({ showCaptionInput: true })
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
            showCaptionInput: this.state.showCaptionInput,
            userPosts: this.state.userPosts,
            userProfilePicture: this.state.userProfilePicture,
            setDataFalse: this.setDataFalse,
            setDataTrue: this.setDataTrue,
            setExpandUserGalleryFalse: this.setExpandUserGalleryFalse,
            setExpandUserGalleryTrue: this.setExpandUserGalleryTrue,
            setShowCaptionInputFalse: this.setShowCaptionInputFalse,
            setShowCaptionInputTrue: this.setShowCaptionInputTrue,
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
