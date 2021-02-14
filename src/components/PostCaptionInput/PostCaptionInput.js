import React, { Component } from 'react'
import MomentsContext from '../../contexts/MomentsContext'
import './PostCaptionInput.css'

export default class PostCaption extends Component {
    static contextType = MomentsContext

    state = {
        error: null
    }


    renderCaptionInput() {
        if (this.context.showCaptionInput === true) {
            return (
                <div
                    aria-live='assertive'
                    aria-relevant='all'
                    className='caption-input-wrapper'
                >
                    <label 
                        htmlFor='caption-input'
                        aria-label='caption-input'
                        // className='caption-label'
                    />
                    <textarea
                        id='caption-input'
                        name='caption-input'
                        type='text'
                        className='caption-input'
                        placeholder='Add a caption for your moment'
                        aria-required='true'
                        autoComplete='off'
                    >
                    </textarea>
                </div>
            )
        }
    }

    render() {
        const { error } = this.state

        return (
            <div>
                {this.renderCaptionInput()}
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
            </div>
        )
    }
}
