import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MomentsContext from '../../contexts/MomentsContext'
import MomentsApiService from '../../services/moments-api-service'
import Upload from '../Upload/Upload'
import './ProfilePictureForm.css'


export default class ProfilePictureForm extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
        currentProfilePicture: {},
    }

    // this component did mount sets the state of currentProfilePicture allowing us 
    // to run a check for profile pictures uploads: if one exists, the client makes a 
    // patch request for the existing profile picture.  If it doesn't, the client makes 
    // a post request. 
    componentDidMount() {
        MomentsApiService.getProfilePicture()
            .then(res => this.setState({ currentProfilePicture: res }))
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        const currentProfilePicture= this.state.currentProfilePicture
        const { setDataFalse } = this.context


        if (!currentProfilePicture.length) {
            MomentsApiService.postProfilePicture(ev.target)
                .then(() => this.props.history.push('/account'))
                .then(setDataFalse())
                .catch(error => {
                    this.setState({ error })
                })
        } else {
            MomentsApiService.updateProfilePicture(ev.target, currentProfilePicture[0].id)
                .then(() => this.props.history.push('/account'))
                .then(setDataFalse())
                .catch(error => {
                    this.setState({ error })
                })
        }
    }

    render() {
        const { error } = this.state
        const { data } = this.context

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
                    <Link 
                        to='/account'
                        className='back-button'
                    >
                        Back
                    </Link>
                    <button 
                        type='submit'
                        className='submit-button'
                        disabled={!data}
                    >
                        Submit
                    </button>
                </div>
                <Upload />
            </form>
        )
    }
}
