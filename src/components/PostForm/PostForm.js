import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MomentsContext from '../../contexts/MomentsContext'
import MomentsApiService from '../../services/moments-api-service'
import PostCaptionInput from '../PostCaptionInput/PostCaptionInput'
import Upload from '../Upload/Upload'
import './PostForm.css'


export default class PostForm extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
        // currentProfilePicture: {},
        showSubmit: null,
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        // const currentProfilePicture= this.state.currentProfilePicture
        console.log('EVENT TARGET', ev.target.value)
        const { setDataFalse, setShowCaptionInputFalse } = this.context

            MomentsApiService.postPostPhoto(ev.target)
                // .then(setCurrentProfilePicture())
                .then(() => this.props.history.push('/profile'))
                .then(setDataFalse())
                .then(setShowCaptionInputFalse())
                .then(this.setState({ showSubmit: false }))
                .catch(error => {
                    this.setState({ error })
                })
    } 
    

    handleClickBack = () => {
        this.context.setShowCaptionInputFalse()
        this.context.setDataFalse()
        this.setState({ showSubmit: false})
    }

    handleClickNext = () => {
        this.context.setShowCaptionInputTrue()
        this.setState({ showSubmit: true })
    }

    render() {
        const { error, showSubmit } = this.state
        const { data, showCaptionInput } = this.context
        // const currentProfilePicture = this.state.currentProfilePicture
        // console.log('ProfilePic', currentProfilePicture)

        return (
            <form
                onSubmit={this.handleSubmit}
                encType='multipart/form-data'
            >
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error.message}</p>}
                </div>
                <div className='upload-navigation'>
                    {showCaptionInput === false
                        ?<Link 
                            to='/feed'
                            className='back-button'
                            onClick={this.handleClickBack}
                        >
                            Back
                        </Link>
                        : <button
                            type='button'
                            className='back-to-photo-button'
                            onClick={this.handleClickBack}
                        >
                            Back
                        </button>}
                    {showCaptionInput === false
                        ? <button 
                            type='button'
                            className='next-button'
                            disabled={!data}
                            onClick={this.handleClickNext}
                        >
                            Next
                        </button>
                        : ''}
                    {showSubmit === true
                        ? <button 
                            type='submit'
                            className='submit-button'
                            disabled={!data}
                        >
                            Submit
                        </button>
                        : ''}
                </div>
                <div>
                    <PostCaptionInput />
                    <Upload />
                </div>
                
            </form>
        )
    }
}
