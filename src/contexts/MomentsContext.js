import React, { Component } from 'react'

const MomentsContext = React.createContext({
    // currentProfilePicture: {},
    data: false,
    showCaptionInput: false,
    // setCurrentProfilePicture: () => { },
    setDataFalse: () => { },
    setDataTrue: () => { },
    setShowCaptionInputFalse: () => { },
    setShowCaptionInputTrue: () => { },

})

export default MomentsContext

export class MomentsProvider extends Component {
    state = {
        // currentProfilePicture: {},
        data: null,
        showCaptionInput: false,
        
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

    render() {
        const value = {
            // currentProfilePicture: this.state.currentProfilePicture,
            data: this.state.data,
            showCaptionInput: this.state.showCaptionInput,
            // setCurrentProfilePicture: this.setCurrentProfilePicture,
            setDataFalse: this.setDataFalse,
            setDataTrue: this.setDataTrue,
            setShowCaptionInputFalse: this.setShowCaptionInputFalse,
            setShowCaptionInputTrue: this.setShowCaptionInputTrue,
        }
        return (
            <MomentsContext.Provider value={value}>
                {this.props.children}
            </MomentsContext.Provider>
        )
    }
}
