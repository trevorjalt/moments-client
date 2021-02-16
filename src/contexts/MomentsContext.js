import React, { Component } from 'react'

const MomentsContext = React.createContext({
    // currentProfilePicture: {},
    data: false,
    showCaptionInput: false,
    userPosts: [],
    // setCurrentProfilePicture: () => { },
    setDataFalse: () => { },
    setDataTrue: () => { },
    setShowCaptionInputFalse: () => { },
    setShowCaptionInputTrue: () => { },
    setUserPosts: () => { },

})

export default MomentsContext

export class MomentsProvider extends Component {
    state = {
        // currentProfilePicture: {},
        data: null,
        showCaptionInput: false,
        userPosts: [],
        
    }

    // setCurrentProfilePicture = currentProfilePicture => {
    //     this.setState({ currentProfilePicture })
    // }

    setDataFalse = () => {
        this.setState({ data: false })
    }

    setDataTrue = () => {
        this.setState({ data: true })
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

    render() {
        const value = {
            // currentProfilePicture: this.state.currentProfilePicture,
            data: this.state.data,
            showCaptionInput: this.state.showCaptionInput,
            userPosts: this.state.userPosts,
            // setCurrentProfilePicture: this.setCurrentProfilePicture,
            setDataFalse: this.setDataFalse,
            setDataTrue: this.setDataTrue,
            setShowCaptionInputFalse: this.setShowCaptionInputFalse,
            setShowCaptionInputTrue: this.setShowCaptionInputTrue,
            setUserPosts: this.setUserPosts,
        }
        return (
            <MomentsContext.Provider value={value}>
                {this.props.children}
            </MomentsContext.Provider>
        )
    }
}
